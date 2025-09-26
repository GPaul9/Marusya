import styles from './Header.module.scss';

import '@/styles/breakpoints';
import logo from '@/assets/logo-light.png';
import GenresIcon from '@/assets/genres-icon.svg?react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AuthButton, SearchBoxView } from '@/components';
import { breakpoints } from '@/styles/breakpoints';

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.lg });

  return(
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Link to='/'>
          <img className={styles.header__logo} src={logo} alt='Логотип Маруся' />
        </Link>
        <div className={styles.header__wrapper}>
          <nav className={styles.header__nav}>
            {!isMobile &&
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `${styles.header__link} ${isActive ? styles.header__link_active : ''}`
                }
              >
                Главная
              </NavLink>
            }

            <NavLink
              to='/genres'
              className={({ isActive }) =>
                `${styles.header__link} ${isActive && !isMobile ? styles.header__link_active : ''}`
              }
            >
              {isMobile ? <GenresIcon className={styles.header__icon} aria-label='Жанры' /> : 'Жанры'}
            </NavLink>
          </nav>
          <SearchBoxView />
        </div>
        <AuthButton />
      </div>
    </header>
  );
};
