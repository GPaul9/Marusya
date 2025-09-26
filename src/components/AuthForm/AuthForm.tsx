import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { SuccessForm } from './SuccessForm';
import { Modal } from '@/components';


type TProps = {
  authMode?: 'login' | 'register' | 'success',
  onClose: () => void,
}

export const AuthForm = ({ authMode = 'login', onClose }: TProps) => {
  const [mode, setMode] = useState<'login' | 'register' | 'success'>(authMode)

  return (
    <Modal position='center' onClose={onClose}>
      {mode === 'login' && <LoginForm setAuthMode={setMode} onClose={onClose}/>}
      {mode === 'register' && <RegisterForm setAuthMode={setMode} onClose={onClose}/>}
      {mode === 'success' && <SuccessForm setAuthMode={setMode} onClose={onClose}/>}
    </Modal>
  )
}
