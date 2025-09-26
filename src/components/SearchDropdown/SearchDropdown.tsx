import styles from './SearchDropdown.module.scss';

import { UnifiedInfiniteQueryState } from '@/types/unifiedQuery';
import { Movie } from '@/types';
import { SearchDropdownItem } from '@/components';

type TProps = {
  dataQuery: UnifiedInfiniteQueryState<Movie>;
}

export const SearchDropdown = ({ dataQuery }: TProps) => {
  const { data, isLoading } = dataQuery;

  if(isLoading) return (
    <div className={`${styles.dropdown} ${styles.dropdown_loader}`}>
      <div className={styles['dropdown__loader-icon']}></div>
    </div>
  )

  if (data.length == 0) return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__text}>По вашему запросу нет результатов</div>
    </div>
  )

  return (
    <ul className={styles.dropdown}>
      {data.map((movie, index) => (
        <li key={index} className={styles.dropdown__item} >
          <SearchDropdownItem dataMovie={movie} />
        </li>
      ))}
    </ul>
  )
}
