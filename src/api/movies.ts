import { apiClient } from './apiClient';
import { Genre, Movie, MovieFilterParams } from '@/types';

export const movieRandomRequest = async (): Promise<Movie> => {
  const res = await apiClient.get('/movie/random');
  return res.data;
};

export const movieMovieRequest = async (movieId: number): Promise<Movie> => {
  const res = await apiClient.get(`/movie/${movieId}`);
  return res.data;
}

export const movieTopRequest = async (): Promise<Movie[]> => {
  const res = await apiClient.get('/movie/top10');
  return res.data;
};

export const movieFilterRequest = async (params:MovieFilterParams): Promise<Movie[]> => {
  const res = await apiClient.get('/movie', { params });
  return res.data;
}

export const genresRequest = async (): Promise<Genre[]> => {
  const res = await apiClient.get('/movie/genres');
  return res.data;
};
