import styles from './GenresListSection.module.scss';

import { Link } from 'react-router-dom';
import { capitalizeWords } from '@/utils/stringUtils';
import genresImg from '@/assets/genres/genres.webp';

type Tprops = {
  name: string;
}

export const GenresCard = ({ name }: Tprops) => {
  const imgSrc = new URL(`../../assets/genres/${name.toLowerCase()}.webp`, import.meta.url).href;

  return (
    <Link to={`/genres/${name}`} className={styles['genres-card']}>
      <img
        className={styles['genres-card__img']}
        loading='lazy'
        src={imgSrc}
        alt={name}
        onError={(e) => {
          e.currentTarget.src = genresImg;
        }}
      />
      <div className={styles['genres-card__name']}>{capitalizeWords(name)}</div>
    </Link>
  )
};
