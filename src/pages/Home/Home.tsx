import styles from './Home.module.scss';

import { useMovieRandom, useMovieTop } from '@/hooks/useMovies';
import { getUnifiedQueryState } from '@/utils/getUnifiedQueryState';
import { lazy } from 'react';

const MoviePreview = lazy(() => import('@/components/MoviePreview'));
const MovieTopSection = lazy(() => import('@/components/MovieTopSection'));

const Home = () => {
  const movieQuery = useMovieRandom();
  const topQuery = getUnifiedQueryState(useMovieTop());

  return (
    <div className={styles.home}>
      <div className={`container ${styles.home__container}`}>
          <MoviePreview dataQuery={movieQuery} mode='preview' />
          <MovieTopSection dataQuery={topQuery} />
      </div>
    </div>
  )
};

export default Home;
