import styles from './SearchDropdownItem.module.scss';

import { Movie } from '@/types';
import { Link } from 'react-router-dom';
import { MovieRating } from '@/components';
import { runTimeMovieFormat } from '@/utils/stringUtils';

type TProps = {
  dataMovie: Movie;
}

export const SearchDropdownItem = ({ dataMovie }: TProps) => {
  return (
    <Link to={`/${dataMovie.id}`} className={styles.item}>
      {dataMovie.posterUrl ? (
        <img
          src={dataMovie.posterUrl}
          alt={dataMovie.title}
          className={styles.item__poster}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : (
        <div className={styles.item__poster} />
      )}

      <div className={styles.item__content}>
        <div className={styles.item__meta}>
          <MovieRating ratingValue={dataMovie.tmdbRating} size='small' />
          <span>{dataMovie.releaseYear}</span>
          <span>{dataMovie.genres.join(', ')}</span>
          <span>{runTimeMovieFormat(dataMovie.runtime)}</span>
        </div>
        <h3 className={styles.item__title}>{dataMovie.title}</h3>
      </div>
    </Link>
  )
};
