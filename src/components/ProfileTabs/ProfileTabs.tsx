import styles from './ProfileTabs.module.scss';
import { breakpoints } from '@/styles/breakpoints';

import { ProfileTabsValue } from '@/types';
import FavoritesIcon from '@/assets/favorite-icon.svg?react';
import SettingsIcon from '@/assets/user-icon.svg?react';
import { useMediaQuery } from 'react-responsive';

type TProps = {
  tabValue: string;
  setTabValue: (tab: ProfileTabsValue) => void;
}

export const ProfileTabs = ({ tabValue, setTabValue }: TProps) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.md });

  return (
    <div className={styles.tabs}>
      <button
        type='button'
        className={`${styles.tabs__item} ${tabValue === 'favorites' ? styles.tabs__item_active : ''}
        `}
        onClick={() => setTabValue('favorites')}
      >
        <FavoritesIcon className={styles.tabs__icon}/>
        {isMobile ? 'Избранные' : 'Избранные фильмы'}
      </button>
      <button
        type='button'
        className={`${styles.tabs__item} ${tabValue === 'settings' ? styles.tabs__item_active : ''}`}
        onClick={() => setTabValue('settings')}
      >
        <SettingsIcon className={styles.tabs__icon}/>
        {isMobile ? 'Настройка' : 'Настройка аккаунта'}
      </button>
    </div>
  );
};
