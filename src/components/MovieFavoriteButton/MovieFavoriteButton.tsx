import styles from './MovieFavoriteButton.module.scss';

import { useAddFavorite, useRemoveFavorite } from '@/hooks/useFavorites';
import FavoriteIcon from '@/assets/favorite-icon.svg?react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openAuthModal } from '@/store/slices/authSlice';
import React, { useCallback, useEffect, useState } from 'react';

type TProps = {
  movieId: number;
}

export const MovieFavoriteButton = React.memo(({movieId}: TProps) => {
  const {user, isAuth} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch();

  const addFavorite = useAddFavorite();
  const removeFavorite = useRemoveFavorite();

  const [isFavorite, setIsFavorite] = useState(
    user?.favorites?.includes(movieId.toString()) ?? false
  );

  useEffect(() => {
    setIsFavorite(user?.favorites?.includes(movieId.toString()) ?? false);
  }, [movieId, user]);

  const handleToggleFavorite = useCallback(async () => {
    if (!movieId) return;
    if (!isAuth) return dispatch(openAuthModal())

    if (isFavorite) {
      await removeFavorite.mutate(movieId);
      setIsFavorite(false);
    } else {
      await addFavorite.mutate(movieId);
      setIsFavorite(true);
    }
  }, [movieId, isAuth, isFavorite, addFavorite, removeFavorite]);

  return (
    <button className={styles.btn} onClick={handleToggleFavorite}>
      <FavoriteIcon className={`${styles.btn__icon} ${isFavorite ? styles.btn__icon_active : ''}`} />
    </button>
  )
});
