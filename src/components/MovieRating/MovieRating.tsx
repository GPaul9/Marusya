import styles from './MovieRating.module.scss';

import StarIcon from '@/assets/star-icon.svg?react';

type TProps = {
  ratingValue: number;
  size?: 'large' | 'small';
};

type ratingGrade = 'excellent' | 'good' | 'poor' | 'bullshit'

export const MovieRating = ({ ratingValue, size='large' }: TProps) => {

  const ratingGrade = (): ratingGrade => {
    if (ratingValue === undefined) return 'bullshit';
    if (ratingValue >= 8.5) return 'excellent';
    if (ratingValue >= 6.5) return 'good';
    if (ratingValue >= 4.5) return 'poor';
    return 'bullshit';
  }

  const ratingValueFormat = ratingValue && ratingValue.toFixed(1).replace('.', ',');

  return (
    <div className={`${styles.rating} ${styles[`rating_${ratingGrade()}`]} ${styles[`rating_${size}`]}`}>
      <StarIcon className={`${styles.rating__icon} ${styles[`rating__icon_${size}`]}`}/>
      <span className={styles.rating__value}>{ratingValueFormat}</span>
    </div>
  )
};
