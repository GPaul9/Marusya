import styles from './Modal.module.scss';

import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { FC, ReactNode, MouseEvent } from 'react';

type TProps = {
  children: ReactNode;
  position: 'center' | 'up';
  onClose: () => void;
  className?: string;
}

export const Modal: FC<TProps> = ({ children, position, onClose, className }) => {
  useLockBodyScroll();

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className={styles.modal}>
        <div
          className={` ${styles.modal__inner} ${position === 'center' ? styles['modal_position-center'] : styles['modal_position-up']} ${className}`}
          onClick={handleModalClick}
        >
         {children}
        </div>
    </div>
  )
}
