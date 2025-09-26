import styles from './Profile.module.scss';

import { lazy, useState } from 'react';
import { ProfileTabsValue } from '@/types';
import { ProfileTabs, PageLoader } from '@/components';
import { useAppSelector } from '@/store/hooks';
import { Navigate } from 'react-router-dom';
import { useFavorites } from '@/hooks/useFavorites';
import { getUnifiedQueryState } from '@/utils/getUnifiedQueryState';

const ProfileSettings = lazy(() => import('@/components/ProfileSettings/ProfileSettings'));
const ProfileFavoritesList = lazy(() => import('@/components/ProfileFavoritesList/ProfileFavoritesList'));

const Profile = () => {
  const { isAuth, status } = useAppSelector(state => state.auth);

  const [tab, setTab] = useState<ProfileTabsValue>('favorites');

  const unifiedFavoritesQuery = getUnifiedQueryState(useFavorites());

  if (status === 'loading') return <PageLoader />

  if (!isAuth && status !== 'idle') {
    return <Navigate to={'/'} />
  }

  return (
    <div className={styles.profile}>
      <div className={`container ${styles.profile__container}`}>
        <h1 className={styles.profile__title}>Мой аккаунт</h1>

        <ProfileTabs tabValue={tab} setTabValue={setTab}/>
        {tab === 'settings' && <ProfileSettings />}
        {tab === 'favorites' && <ProfileFavoritesList dataQuery={unifiedFavoritesQuery}/>}
      </div>
    </div>
  )
};

export default Profile;
