import styles from './TrailerButton.module.scss';

import { Movie } from '@/types';
import { useModal } from '@/hooks/useModal';
import { Modal, ModalCloseButton } from '@/components';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import PauseIcon from '@/assets/pause-icon.svg?react';
import PlayIcon from '@/assets/play-icon.svg?react';

type TProps = {
  movieData: Movie;
}

export const TrailerButton = ({ movieData }: TProps) => {
  const { trailerUrl, title } = movieData;

  const modal = useModal();

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <>
      <button className={styles.trailer__btn} onClick={modal.open}>
        Трейлер
      </button>

      {modal.isOpen &&
        <Modal position='center' onClose={modal.close} className={styles.trailer__modal}>
          <div
            className={styles.trailer__wrapper}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {isLoading && <div className={styles.trailer__loader}></div> }

            <ReactPlayer
              className={styles.trailer__screen}
              src={trailerUrl}
              controls={false}
              playing={isPlaying}
              onReady={() => setIsLoading(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              width='100%'
              height='100%'
              playIcon={<PlayIcon className={styles['trailer__control-icon']} />}
              config={{
                youtube: {
                  rel: 0,
                },
              }}
            />

            {isPlaying === false && <div className={styles.trailer__title}>{title}</div> }

            {isPlaying === false &&
              <>
                {isHover === true ?
                  <PlayIcon className={styles['trailer__control-icon']}/> :
                  <PauseIcon className={styles['trailer__control-icon']}/>}
              </>
            }

            {isPlaying === false && <ModalCloseButton onClose={modal.close} />}
          </div>

        </Modal>
      }
    </>
  )
};
