import Skeleton from 'react-loading-skeleton';
import styles from './MovieDetailsSection.module.scss';

type TProps = {
  parameter: string,
  value: string,
};

export const DetailsItem = ({ parameter, value }: TProps) => {

  return (
    <li className={styles['details-item']}>
      <div className={styles['details-item__parameter']}>{parameter}</div>
      <div className={styles['details-item__value']}>{value || 'Неизвестно'}</div>
    </li>
  )
};
