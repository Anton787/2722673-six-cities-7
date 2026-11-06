import type {DetailedOffer, Offer, Review} from '@/types/offer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppPath} from '@router/paths';
import MainPage from '@pages/main-page/main-page';
import LoginPage from '@pages/login-page/login-page';
import FavoritesPage from '@pages/favorites-page/favorites-page';
import OfferPage from '@pages/offer-page/offer-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import PrivateRoute from '@router/private-route/private-route';

type AppRouterProps = {
  offers: Offer[];
  favorites: Offer[];
  detailedOffers: DetailedOffer[];
  comments: Record<string, Review[]>;
};

function AppRouter({offers, favorites, detailedOffers, comments}: AppRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppPath.main}
          element={
            <MainPage offers={offers}
              favoritesCount={favorites.length}
            />
          }
        />
        <Route
          path={AppPath.login}
          element={
            <LoginPage />
          }
        />
        <Route
          path={AppPath.favorites}
          element={
            <PrivateRoute isAuthorized={false}>
              <FavoritesPage offers={favorites} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppPath.offer}
          element={
            <OfferPage
              offers={detailedOffers}
              nearbyOffers={offers}
              comments={comments}
              favoritesCount={favorites.length}
            />
          }
        />
        <Route
          path={AppPath.notFound}
          element={
            <NotFoundPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

