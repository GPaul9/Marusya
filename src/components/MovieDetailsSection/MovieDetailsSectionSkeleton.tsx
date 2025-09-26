import styles from './MovieDetailsSection.module.scss';

import Skeleton from "react-loading-skeleton";

export const MovieDetailsSectionSkeleton = () => {

  return (
    <section className={styles.details}>
      <h2 className={styles.details__title}>О фильме</h2>

      <div className={styles.details__list}>
        {Array.from({length: 6}, (_, index) => (
          <Skeleton key={index} width={320} />
        ))}
      </div>
    </section>
  )
};
