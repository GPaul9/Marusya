import styles from './MoviePreview.module.scss';

import { runTimeMovieFormat } from '@/utils/stringUtils';
import { Movie } from '@/types';
import { UseQueryResult } from '@tanstack/react-query';
import { MoviePreviewSkeleton } from './MoviePreviewSkeleton';
import { Link } from 'react-router-dom';
import { MovieFavoriteButton, MovieRating, TrailerButton } from '@/components';
import RefetchIcon from '@/assets/refetch-icon.svg?react';

type TProps = {
  dataQuery: UseQueryResult<Movie, Error>;
  mode?: 'preview';
}

const MoviePreview = ({ dataQuery, mode }: TProps) => {
  const { data: movie, isLoading, refetch } = dataQuery;

  if(isLoading || !movie) return <MoviePreviewSkeleton />

  return (
    <section className={styles.movie}>
      <div className={styles['movie__info-wrapper']}>
        <div className={styles.movie__data}>
          <div className={styles.movie__meta}>
            <MovieRating ratingValue={movie.tmdbRating} />
            <span>{movie.releaseYear}</span>
            <span>{movie.genres[0]}</span>
            <span>{runTimeMovieFormat(movie.runtime)}</span>
          </div>
          <h1 className={styles.movie__title}>{movie.title}</h1>
          <p className={styles.movie__description}>{movie.plot}</p>
        </div>

        <div className={`${styles['movie__btn-wrapper']} ${mode === 'preview' ? styles['movie__btn-wrapper_preview-layout'] : ''}`}>
          <TrailerButton movieData={movie}/>

          {mode === 'preview' &&
            <Link to={`/${movie.id}`} className={styles['movie__btn-about']}>
              О фильме
            </Link>
          }

          <MovieFavoriteButton movieId={movie.id}/>

          {mode === 'preview' &&
            <button className={styles.movie__btn} onClick={() => refetch()}>
              <RefetchIcon className={styles['movie__btn-icon']} />
            </button>
          }
        </div>
      </div>

      {movie.backdropUrl &&
        <div className={styles['movie__poster-wrapper']}>
          <img className={styles.movie__poster} src={movie.backdropUrl} alt={movie.title} fetchPriority='high'/>
        </div>
      }
    </section>
  )
};

export default MoviePreview;


