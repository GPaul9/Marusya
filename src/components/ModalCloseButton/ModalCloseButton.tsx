import styles from './ModalCloseButton.module.scss';
import CloseIcon from '@/assets/close-icon.svg?react';

type TProps = {
  onClose: () => void;
}

export const ModalCloseButton = ({onClose}: TProps) => {
  return(
    <button type='button' className={styles.btn} onClick={onClose}>
      <CloseIcon className={styles.btn__icon}/>
    </button>
  )
}
