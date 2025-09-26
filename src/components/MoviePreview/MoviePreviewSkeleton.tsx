import Skeleton from 'react-loading-skeleton';
import styles from './MoviePreview.module.scss';

export const MoviePreviewSkeleton = () => {
  return (
    <div className={styles.movie}>
      <div className={styles['movie__info-wrapper']}>
        <div className={styles.movie__data}>
          <div className={styles.movie__meta}>
            <Skeleton containerClassName={styles.skeleton} height={32}/>
            <Skeleton containerClassName={styles.skeleton} height={32}/>
            <Skeleton containerClassName={styles.skeleton} height={32}/>
            <Skeleton containerClassName={styles.skeleton} height={32}/>
          </div>
          <h1 className={styles.movie__title}><Skeleton containerClassName={styles.skeleton} count={2} /></h1>
          <p className={styles.movie__description}><Skeleton containerClassName={styles.skeleton} count={2}/></p>
        </div>

        <div>
          <Skeleton containerClassName={styles.skeleton} height={56} />
        </div>
      </div>

      <div className={styles.movie__poster}>
        <Skeleton height='100%'/>
      </div>
    </div>
  )
};
