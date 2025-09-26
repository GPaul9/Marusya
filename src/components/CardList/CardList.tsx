import styles from './CardList.module.scss';

import { UnifiedQueryState } from '@/types/unifiedQuery';
import { ReactNode } from 'react';
import { MessageBlock } from '@/components';
import { CardListSkeleton } from './CardListSkeleton';

type TProps<T> = {
  dataQuery: UnifiedQueryState<T>;
  mobileLayout: 'grid' | 'scroll';
  children: (item: T, index: number) => ReactNode;
  className?: string;
}

export const CardList = <T,>({ dataQuery, mobileLayout, children, className }: TProps<T>) => {
  const {data, isLoading, isError, refetch} = dataQuery;

  if (isLoading) return <CardListSkeleton mobileLayout={mobileLayout} />;
  if (isError) return <MessageBlock message='Не удалось получить список :(' onRefetch={refetch}/>;
  if (!data || data.length === 0) return <MessageBlock message='Список пуст' />;

  return (
    <ul className={`${styles.list} ${mobileLayout === 'grid' ? styles['list_mobile-grid'] : styles['list_mobile-scroll']} ${className}`}>
      {data.map((item, index) => (
        <li key={index} className={styles.list__item}>
          {children(item, index)}
        </li>
      ))}
    </ul>
  )
};
