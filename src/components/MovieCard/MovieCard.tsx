import styles from './MovieCard.module.scss';

import { Movie } from '@/types';
import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import { Children, FC, ReactNode, useState } from 'react';

type TProps = {
  movieData: Movie;
  className?: string;
  children?: ReactNode;
}

export const MovieCard = ({ movieData, className ,children }: TProps) => {
  const { id, title, posterUrl } = movieData;

  const [isLoaded, setIsLoaded] = useState(!posterUrl);

  return (
    <article className={`${styles.card} ${!isLoaded ? styles.card_loading : ''} ${className ?? ''}`}>
      {posterUrl && !isLoaded &&
        <div className={styles.card__skeleton}>
          <Skeleton width='100%' height='100%' />
        </div>
      }
      <Link to={`/${id}`} className={styles.card__link}>
        {posterUrl ?
          <img className={styles.card__poster} loading='lazy' src={`${posterUrl}`} alt={title}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
          /> :
          <div className={`${styles.card__poster} ${styles.card__poster_empty}`}>{title}</div>
        }
      </Link>

      {isLoaded && children}
    </article>
  )
};
