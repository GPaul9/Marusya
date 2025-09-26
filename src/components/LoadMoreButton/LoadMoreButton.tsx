import styles from './LoadMoreButton.module.scss';

type TProps = {
  onClick: () => void;
  isLoading: boolean;
  hasNextPage: boolean | undefined;
}

export const LoadMoreButton = ({ onClick, isLoading, hasNextPage }: TProps) => {
  if (!hasNextPage) return null;

  return(
    <button
      className={`${styles.button} ${isLoading ? styles.button_loading : ''}`}
      onClick={onClick}
      disabled={isLoading}
      aria-label='Загрузить ещё фильмы'
    >
      Показать еще
    </button>
  )
};
