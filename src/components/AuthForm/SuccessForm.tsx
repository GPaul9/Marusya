import styles from './AuthForm.module.scss';

import { ModalCloseButton } from '@/components';
import logo from '@/assets/logo-dark.png';

type TProps = {
  setAuthMode: (mode: 'login' | 'register' | 'success') => void;
  onClose: () => void;
}

export const SuccessForm = ({ setAuthMode, onClose }: TProps) => {
  return(
    <div className={styles.auth}>
      <img src={logo} alt='Логотип Маруся' className={styles.auth__logo} />
      <h2 className={styles.auth__title}>Регистрация завершена</h2>

      <p className={styles.auth__descr}>
        Используйте вашу электронную почту для входа
      </p>
      <button type='button' className={styles[`auth__submit-btn`]} onClick={() => setAuthMode('login')}>
        Войти
      </button>

      <ModalCloseButton onClose={onClose} />
    </div>
  )
};
