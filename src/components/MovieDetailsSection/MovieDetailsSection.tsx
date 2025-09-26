import styles from './MovieDetailsSection.module.scss';

import { UseQueryResult } from '@tanstack/react-query';
import { Movie } from '@/types';
import { formatRub } from '@/utils/stringUtils';
import { DetailsItem } from './DetailsItem';
import { MovieDetailsSectionSkeleton } from './MovieDetailsSectionSkeleton';

type TProps = {
  dataQuery: UseQueryResult<Movie, Error>;
}

export const MovieDetailsSection = ({ dataQuery }: TProps) => {
  const { data, isLoading } = dataQuery;

  if(isLoading || !data) return <MovieDetailsSectionSkeleton />;

  const details = [
    { parameter: 'Язык оригинала', value: data.language},
    { parameter: 'Бюджет', value: formatRub(data.budget)},
    { parameter: 'Выручка', value: formatRub(data.revenue)},
    { parameter: 'Режиссер', value: data.director},
    { parameter: 'Продакшен', value: data.production},
    { parameter: 'Награды', value: data.awardsSummary},
  ]

  return (
    <section className={styles.details}>
      <h2 className={styles.details__title}>О фильме</h2>

      <ul className={styles.details__list}>
        {details.map(detail => (
          <DetailsItem key={detail.parameter} parameter={detail.parameter} value={detail.value} />
        ))}
      </ul>
    </section>
  )
};
