import styles from './SearchBox.module.scss';

import SearchIcon from '@/assets/search-icon.svg?react'
import { Modal } from '../Modal';
import { SearchBox } from './SearchBox';
import { useMediaQuery } from 'react-responsive';
import { useModal } from '@/hooks/useModal';
import { breakpoints } from '@/styles/breakpoints';

export const SearchBoxView = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.md });

  const modal = useModal();

  if (isMobile) {
    return (
      <>
        <button onClick={modal.open}>
          <SearchIcon className={styles['mobile-icon']} aria-label='Поиск'/>
        </button>

        {modal.isOpen &&
          <Modal position="up" onClose={modal.close}>
            <SearchBox />
          </Modal>
        }
      </>
    )
  }

  return <SearchBox />
};
