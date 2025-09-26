import { apiClient } from './apiClient';
import { Movie } from '@/types';

export const favoritesRequest = async (): Promise<Movie[]> => {
  const res = await apiClient.get('/favorites', {
    withCredentials: true,
  });
  return res.data;
};

export const favoriteAddRequest = async (movieId: number): Promise<void> => {
  const formData = new URLSearchParams();
  formData.append('id', movieId.toString());

  const res = await apiClient.post(`/favorites`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const favoriteRemoveRequest = async (movieId: number): Promise<void>  => {
  const res = await apiClient.delete(`/favorites/${movieId}`, {
    withCredentials: true,
  })
  return res.data;
}
