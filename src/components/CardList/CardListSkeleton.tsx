import styles from './CardList.module.scss';
import { breakpoints } from '@/styles/breakpoints';

import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

type TProps = {
  mobileLayout: 'grid' | 'scroll';
};

export const CardListSkeleton = ( { mobileLayout }: TProps) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.md });

  return (
    <div className={`${styles.list} ${mobileLayout === 'grid' ? styles['list_mobile-grid'] : styles['list_mobile-scroll']}`}>
      {Array.from({length: isMobile ? 4 : 10}, (_, index) => (
        <Skeleton key={index} height={304} containerClassName={mobileLayout === 'scroll' && isMobile ? styles['skeleton-mobile-scroll'] : ''}/>
      ))}
    </div>
  )
};
