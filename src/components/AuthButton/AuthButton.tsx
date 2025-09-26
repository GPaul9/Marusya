import styles from './AuthButton.module.scss';

import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@/styles/breakpoints';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openAuthModal } from '@/store/slices/authSlice';
import UserIcon from '@/assets/user-icon.svg?react';

export const AuthButton = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.lg });
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch()


  if (user) {
    return (
      <Link to='/profile' className={styles['auth-btn']}>
        {isMobile ? <UserIcon className={styles['auth-btn__icon']} aria-label='Профиль пользователя' /> : user.surname}
      </Link>
    )
  }

  return (
    <button className={styles['auth-btn']} type='button' onClick={() => dispatch(openAuthModal())}>
      {isMobile ? <UserIcon className={styles['auth-btn__icon']} aria-label='Войти' /> : 'Войти'}
    </button>
  )
}
