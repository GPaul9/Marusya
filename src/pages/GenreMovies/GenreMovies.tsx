import styles from './GenreMovies.module.scss';

import { Link, Navigate, useParams } from 'react-router-dom';
import { useMovieFilter } from '@/hooks/useMovies';
import { capitalizeWords } from '@/utils/stringUtils';
import { getUnifiedQueryState } from '@/utils/getUnifiedQueryState';
import { Movie } from '@/types';
import { lazy } from 'react';
import ChevronIcon from '@/assets/chevron-icon.svg?react';

const GenreMoviesListSection = lazy(() => import('@/components/GenreMoviesListSection'));

const GenreMovies = () => {
  const { genreName } = useParams<{ genreName: string }>();

  if (!genreName) return <Navigate to={'/genres'} replace />

  const dataQuery = useMovieFilter({genre: genreName}, { initialCount: 15, nextCount: 10});

  const unifiedDataQuery = getUnifiedQueryState<Movie>(dataQuery);

  return (
    <div className={styles.genre}>
      <div className={`container ${styles.genre__container}`}>
        <h1 className={styles.genre__title}>
          <Link to='/genres' className={styles.genre__link} aria-label='Вернуться к списку жанров'>
            <ChevronIcon className={styles['genre__title-icon']}/>
            {capitalizeWords(genreName)}
          </Link>
        </h1>

        <GenreMoviesListSection dataQuery={unifiedDataQuery} />
      </div>
    </div>
  )
};

export default GenreMovies;
