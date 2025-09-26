import styles from './ProfileFavoritesList.module.scss';

import { useRemoveFavorite } from '@/hooks/useFavorites';
import { UnifiedQueryState } from '@/types/unifiedQuery';
import { Movie } from '@/types';
import { MovieCard } from '@/components';
import { CardList } from '@/components/CardList/CardList';
import RemoveIcon from '@/assets/remove-icon.svg?react';

type TProps = {
  dataQuery: UnifiedQueryState<Movie>
}

const ProfileFavoritesList = ({ dataQuery }: TProps) => {
  const removeFavorite = useRemoveFavorite();

  return (
    <CardList<Movie> dataQuery={dataQuery} mobileLayout='scroll' className={styles.favorites__list}>
      {movie =>
        <MovieCard movieData={movie} className={styles.favorites__card}>
          <button className={styles['favorites__btn-remove']} onClick={() => removeFavorite.mutate(movie.id)}>
            <RemoveIcon className={styles['favorites__btn-icon']}/>
          </button>
        </MovieCard>
      }
    </CardList>
  )
};

export default ProfileFavoritesList;
