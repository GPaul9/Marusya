import styles from './ProfileSettings.module.scss';

import { capitalizeWords, getInitials } from '@/utils/stringUtils';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logoutUser } from '@/store/thunks/authThunks';

const ProfileSettings = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const username = capitalizeWords(`${user?.name} ${user?.surname}`);
  const initials = getInitials(`${user?.name} ${user?.surname}`);

  const handleBtnLogout = async () => {
    await dispatch(logoutUser());
  }

  return (
    <section className={styles.settings}>
      <ul className={styles.settings__info}>
        <li className={styles.settings__item}>
          <div className={styles.settings__icon}>{initials}</div>
          <div className={styles.settings__descr}>
            <p className={styles.settings__label}>Имя Фамилия</p>
            <strong className={styles.settings__text}>{username}</strong>
          </div>
        </li>

        <li className={styles.settings__item}>
          <div className={`${styles.settings__icon} ${styles.settings__icon_mail}`}></div>
          <div className={styles.settings__descr}>
            <p className={styles.settings__label}>Электронная почта</p>
            <strong className={styles.settings__text}>{user?.email}</strong>
          </div>
        </li>
      </ul>

      <button
        type='button'
        className={styles['settings__logout-btn']}
        onClick={handleBtnLogout}
      >
        Выйти из аккаунта
      </button>
    </section>
  )
};

export default ProfileSettings;
