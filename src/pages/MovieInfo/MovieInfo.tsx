import styles from './MovieInfo.module.scss';

import { useMovie } from '@/hooks/useMovies';
import { MovieDetailsSection } from '@/components';
import { Navigate, useParams } from 'react-router-dom';
import { lazy } from 'react';

const MoviePreview = lazy(() => import('@/components/MoviePreview'));

const MovieInfo = () => {
  const { movieId } = useParams<{ movieId: string }>();

  if (!movieId) return <Navigate to={'/genres'} replace />

  const movieData = useMovie(Number(movieId));

  return (
    <div className={styles.movie}>
      <div className={`container ${styles.movie__container}`}>
          <MoviePreview dataQuery={movieData} />
          <MovieDetailsSection dataQuery={movieData} />
      </div>
    </div>
  )
};

export default MovieInfo;
