import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { genresRequest, movieFilterRequest, movieMovieRequest, movieRandomRequest, movieTopRequest } from '@/api/movies';
import { Genre, Movie, MovieFilterParams } from '@/types';
import { queryClient } from '@/api/queryClient';


export const useMovieRandom = () => {
  return useQuery<Movie>({
    queryKey: ['movie', 'random'],
    queryFn: async () => {
      const movie = await movieRandomRequest();
      queryClient.setQueryData(['movie', movie.id], movie);
      return movie;
    },
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useMovie = (movieId: number) => {
  return useQuery<Movie>({
    queryKey: ['movie', movieId],
    queryFn: () => movieMovieRequest(movieId),
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000,
  });
};

export const useMovieTop = () => {
  return useQuery<Movie[]>({
    queryKey: ['movieTop'],
    queryFn: movieTopRequest,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000,
  });
};

export const useMovieFilter = (
  params: Omit<MovieFilterParams, 'page' | 'count'>,
  options?: { initialCount?: number; nextCount?: number }
) => {
  const initialCount = options?.initialCount;
  const nextCount = options?.nextCount ?? initialCount;

  return useInfiniteQuery<Movie[]>({
    queryKey: ['movies', params],
    queryFn: ({ pageParam = 1 }) => {
      const page = Number(pageParam) || 1;
      const count = (page === 1) ? initialCount : nextCount;
      return movieFilterRequest({ ...params, page, count });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGenres = () => {
  return useQuery<Genre[]>({
    queryKey: ['genres'],
    queryFn: genresRequest,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 10 * 60 * 1000,
  });
};

