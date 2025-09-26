import styles from './GenreMoviesListSection.module.scss';

import { Movie } from '@/types';
import { UnifiedInfiniteQueryState } from '@/types/unifiedQuery';
import { CardList } from '@/components/CardList/CardList';
import { LoadMoreButton, MovieCard } from '@/components';

type Tprops = {
  dataQuery: UnifiedInfiniteQueryState<Movie>
}

const GenreMoviesListSection = ({ dataQuery }: Tprops) => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = dataQuery;

  return (
    <section className={styles.movies}>
      <CardList<Movie> dataQuery={dataQuery} mobileLayout='grid'>
        {(movie) => <MovieCard movieData={movie} className={styles.movies__card}/>}
      </CardList>

      <LoadMoreButton
        onClick={fetchNextPage}
        isLoading={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />
    </section>
  )
};

export default GenreMoviesListSection;
