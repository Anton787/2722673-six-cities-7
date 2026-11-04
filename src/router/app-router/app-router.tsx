import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppPath} from '@router/paths';
import MainPage from '@pages/main-page/main-page';
import LoginPage from '@pages/login-page/login-page';
import FavoritesPage from '@pages/favorites-page/favorites-page';
import OfferPage from '@pages/offer-page/offer-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import PrivateRoute from '@router/private-route/private-route';

type AppRouterProps = {
  offersCount: number;
};

function AppRouter({offersCount}: AppRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppPath.main} element={<MainPage offersCount={offersCount} />} />
        <Route path={AppPath.login} element={<LoginPage />} />
        <Route
          path={AppPath.favorites}
          element={
            <PrivateRoute isAuthorized={false}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppPath.offer} element={<OfferPage />} />
        <Route path={AppPath.notFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

