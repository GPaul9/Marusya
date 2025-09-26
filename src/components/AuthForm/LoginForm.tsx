import styles from './AuthForm.module.scss';

import { ModalCloseButton } from '@/components';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/store/hooks';
import { loginUser } from '@/store/thunks/authThunks';
import { AuthInput } from './AuthInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import logo from '@/assets/logo-dark.png';
import EmailIcon from '@/assets/email-icon.svg?react';
import PasswordIcon from '@/assets/password-icon.svg?react';

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

type LoginFormFields = z.infer<typeof loginSchema>

type TProps = {
  setAuthMode: (mode: 'login' | 'register' | 'success') => void;
  onClose: () => void;
}

export const LoginForm = ({ setAuthMode, onClose }: TProps) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormFields>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormFields) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      onClose();
    } catch (err: any) {
      setError('root', {
        type: 'server',
        message: err.error || 'Ошибка',
      });
    }
  }

  return (
    <div className={styles.auth}>
      <img src={logo} alt='Логотип Маруся' className={styles.auth__logo} />

      <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['auth__fields']}>
          <AuthInput
            type='text'
            Icon={EmailIcon}
            placeholder='Электронная почта'
            error={!!errors.email}
            {...register('email')}
          />
          <AuthInput
            type='password'
            Icon={PasswordIcon}
            placeholder='Пароль'
            error={!!errors.password}
            {...register('password')}
          />
        </div>

        <button
          type='submit'
          className={styles[`auth__submit-btn`]}
          disabled={isSubmitting}
        >
          Войти
        </button>

        {errors.root &&
          <p className={styles.auth__error}>{errors.root.message}</p>
        }
      </form>

      <ModalCloseButton onClose={onClose} />

      <button type='button' className={styles['auth__switch-btn']} onClick={() => setAuthMode('register')}>
        Регистрация
      </button>
    </div>
  )
};
