import styles from './MovieTopSection.module.scss';

import { Movie } from '@/types';
import { MovieCard } from '@/components';
import { CardList } from '@/components/CardList/CardList';
import { UnifiedQueryState } from '@/types/unifiedQuery';

type TProps = {
  dataQuery: UnifiedQueryState<Movie>;
}

const MovieTopSection = ({ dataQuery }: TProps) => {
  return (
    <section className={styles.top}>
      <h2 className={styles.top__title}>Топ 10 фильмов</h2>

      <CardList<Movie> dataQuery={dataQuery} mobileLayout='scroll' className={styles.top__list}>
        {(movie, index) =>
          <MovieCard movieData={movie}>
            <span className={styles.top__count}>{index + 1}</span>
          </MovieCard>
        }
      </CardList>
    </section>
  )
};

export default MovieTopSection;
