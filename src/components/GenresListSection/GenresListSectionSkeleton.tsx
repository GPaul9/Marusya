import styles from './GenresListSection.module.scss';

import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@/styles/breakpoints';
import Skeleton from 'react-loading-skeleton';

export const GenresListSectionSkeleton = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.lg });
  return (
    <div className={styles.genres__list}>
      {Array.from({length: isMobile ? 6 : 12}, (_, index) => (
        <Skeleton key={index} height={304}/>
      ))}
    </div>
  )
};
