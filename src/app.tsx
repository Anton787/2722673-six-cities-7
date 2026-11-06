import type {DetailedOffer, Offer, Review} from '@/types/offer';
import AppRouter from '@router/app-router/app-router';

type AppProps = {
  offers: Offer[];
  favorites: Offer[];
  detailedOffers: DetailedOffer[];
  comments: Record<string, Review[]>;
};

function App({offers, favorites, detailedOffers, comments}: AppProps) {
  return <AppRouter offers={offers} favorites={favorites} detailedOffers={detailedOffers} comments={comments} />;
}

export default App;
