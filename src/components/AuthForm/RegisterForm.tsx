import styles from './AuthForm.module.scss';

import { ModalCloseButton } from '@/components';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/store/hooks';
import { registerUser } from '@/store/thunks/authThunks';
import { AuthInput } from './AuthInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import logo from '@/assets/logo-dark.png';
import UserIcon from '@/assets/user-icon.svg?react';
import EmailIcon from '@/assets/email-icon.svg?react';
import PasswordIcon from '@/assets/password-icon.svg?react';

const registerSchema = z.object({
  email: z.email(),
  name: z.string().min(2),
  surname: z.string().min(2),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
});

type RegisterFormFields = z.infer<typeof registerSchema>

type TProps = {
  setAuthMode: (mode: 'login' | 'register' | 'success') => void;
  onClose: () => void;
}

export const RegisterForm = ({ setAuthMode, onClose }: TProps) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormFields) => {
    const { email, password, name, surname } = data;
    console.log(data);
    try {
      await dispatch(registerUser({ email, password, name, surname })).unwrap();
      setAuthMode('success');
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
      <h2 className={styles.auth__title}>Регистрация</h2>

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
            type='text'
            Icon={UserIcon}
            placeholder='Имя'
            error={!!errors.name}
            {...register('name')}
          />
          <AuthInput
            type='text'
            Icon={UserIcon}
            placeholder='Фамилия'
            error={!!errors.surname}
            {...register('surname')}
          />
          <AuthInput
            type='password'
            Icon={PasswordIcon}
            placeholder='Пароль'
            error={!!errors.password}
            {...register('password')}
          />
          <AuthInput
            type='password'
            Icon={PasswordIcon}
            placeholder='Подтвердите пароль'
            error={!!errors.confirmPassword}
            {...register('confirmPassword')}
          />
        </div>

        <button
          type='submit'
          className={styles[`auth__submit-btn`]}
          disabled={isSubmitting}
        >
          Создать аккаунт
        </button>

        {errors.root &&
          <p className={styles.auth__error}>{errors.root.message}</p>
        }
      </form>

      <button type='button' className={styles['auth__switch-btn']} onClick={() => setAuthMode('login')}>
        У меня есть пароль
      </button>

      <ModalCloseButton onClose={onClose} />
    </div>
  )
};
