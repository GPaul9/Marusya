import styles from './GenresListSection.module.scss';

import { GenresListSectionSkeleton } from './GenresListSectionSkeleton';
import { MessageBlock } from '@/components';
import { GenresCard } from './GenresCard';
import { UnifiedQueryState } from '@/types/unifiedQuery';
import { Genre } from '@/types';

type TProps = {
  dataQuery: UnifiedQueryState<Genre>;
};

const GenresListSection = ({ dataQuery }: TProps) => {
  const { data, isLoading, isError, refetch } = dataQuery;

  if (isLoading) return <GenresListSectionSkeleton />;
  if (isError) return <MessageBlock message='Не удалось получить список жанров :(' onRefetch={refetch}/>;
  if (!data || data.length === 0) return <MessageBlock message='Список жанров пуст' />;

  return (
    <section className={styles.genres}>
      <ul className={styles.genres__list}>
          {data.map(genre => (
            <li key={genre} className={styles.genres__card}>
              <GenresCard name={genre} />
            </li>
          ))}
      </ul>
    </section>
  )
};

export default GenresListSection;
