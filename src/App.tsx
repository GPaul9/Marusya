import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { lazy, Suspense, useEffect } from 'react';
import { profileUser } from './store/thunks/authThunks';
import { AuthForm, MainLayout, PageLoader } from '@/components';
import { closeAuthModal } from './store/slices/authSlice';

const Home = lazy(() => import('@/pages/Home'));
const Profile = lazy(() => import('@/pages/Profile'));
const Genres = lazy(() => import('@/pages/Genres'));
const GenreMovies = lazy(() => import('@/pages/GenreMovies'));
const MovieInfo = lazy(() => import('@/pages/MovieInfo'));

export function App() {
  const authModal = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profileUser())
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />} >
          <Routes>
            <Route path='/' element={<MainLayout />} >
              <Route index element={<Home />} />
              <Route path='/:movieId' element={<MovieInfo />} />
              <Route path='profile' element={<Profile />} />
              <Route path='genres' element={<Genres />} />
              <Route path='genres/:genreName' element={<GenreMovies />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>

      {authModal.authModalOpen && <AuthForm onClose={() => dispatch(closeAuthModal())} />}
    </>
  )
};
