import { useQuery, useMutation } from '@tanstack/react-query';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateUser } from '@/store/slices/authSlice';
import { queryClient } from '@/api/queryClient';
import { favoritesRequest, favoriteAddRequest, favoriteRemoveRequest } from '@/api/favoritesMovies';
import { Movie } from '@/types';


export const useFavorites = () => {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: favoritesRequest,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 10,
    retry: 1,
  });
};

export const useAddFavorite = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);

  return useMutation({
    mutationFn: (movieId: number) => favoriteAddRequest(movieId),

    onMutate: async (movieId) => {
      await queryClient.cancelQueries({ queryKey: ['favorites'] });

      const prevFavorites = queryClient.getQueryData<Movie[]>(['favorites']);

      queryClient.setQueryData<Movie[]>(['favorites'], (prev) =>
        prev ? [...prev, { id: movieId } as Movie] : [{ id: movieId } as Movie]
      );

      return { prevFavorites };
    },

    onError: (_err, _movieId, context) => {
      if (context?.prevFavorites) {
        queryClient.setQueryData(['favorites'], context.prevFavorites);
      }
    },

    onSuccess: (_, movieId) => {
      if (user) {
        dispatch(updateUser({
          ...user,
          favorites: [...user.favorites, movieId.toString()],
        }));
      }
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
      console.log('добавлено', movieId);
    },
  });
};

export const useRemoveFavorite = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);

  return useMutation({
    mutationFn: (movieId: number) => favoriteRemoveRequest(movieId),
    onMutate: async (movieId) => {
      await queryClient.cancelQueries({ queryKey: ['favorites'] });

      const previousFavorites = queryClient.getQueryData<Movie[]>(['favorites']);

      queryClient.setQueryData<Movie[]>(['favorites'], (prev) =>
        prev ? prev.filter((movie) => movie.id !== movieId) : []
      );

      return { previousFavorites };
    },
    onError: (_err, _movieId, context) => {
      if (context?.previousFavorites) {
        queryClient.setQueryData(['favorites'], context.previousFavorites);
      }
    },

    onSuccess: (_, movieId) => {
      if (user) {
        dispatch(updateUser({
          ...user,
          favorites: user.favorites.filter(fav => fav !== movieId.toString()),
        }));
      }
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
      console.log('удалено', movieId);
    },
  });
};
