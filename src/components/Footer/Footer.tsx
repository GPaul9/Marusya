import styles from './Footer.module.scss';

import VkIcon from '@/assets/vk-icon.svg?react';
import YoutubeIcon from '@/assets/youtube-icon.svg?react';
import OkIcon from '@/assets/ok-icon.svg?react';
import TelegramIcon from '@/assets/tg-icon.svg?react';


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__social}>
          <a className={styles.footer__link} href='#' target='_blank' title='VKontakte'>
            <VkIcon className={styles['footer__link-icon']} />
          </a>
          <a className={styles.footer__link} href='#' target='_blank' title='YouTube'>
            <YoutubeIcon className={styles['footer__link-icon']} />
          </a>
          <a className={styles.footer__link} href='#' target='_blank' title='Odnoklassniki'>
            <OkIcon className={styles['footer__link-icon']} />
          </a>
          <a className={styles.footer__link} href='#' target='_blank' title='Telegram'>
            <TelegramIcon className={styles['footer__link-icon']} />
          </a>
        </div>
      </div>
    </footer>
  )
};
