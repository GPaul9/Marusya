import styles from './Genres.module.scss';

import { useGenres } from '@/hooks/useMovies';
import { getUnifiedQueryState } from '@/utils/getUnifiedQueryState';
import { lazy } from 'react';

const GenresListSection = lazy(() => import('@/components/GenresListSection'));

const Genres = () => {
  const genreQuery = getUnifiedQueryState(useGenres());

  return (
    <div className={styles.genres}>
      <div className={`container ${styles.genres__container}`}>
        <h1 className={styles.genres__title}>Жанры фильмов</h1>
        <GenresListSection dataQuery={genreQuery} />
      </div>
    </div>
  )
};

export default Genres;
