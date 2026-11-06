import Header from '@components/header/header';
import {Link} from 'react-router-dom';
import {AppPath} from '@router/paths';
import OffersList from '@components/offers-list/offers-list';
import {Offer} from '@/types/offer';

type FavoritesPageProps = { offers: Offer[] };

function FavoritesPage({offers}: FavoritesPageProps) {
  const favoritesCount = offers.length;
  const cities = [...new Set(offers.map((offer) => offer.city.name))];
  return (
    <div className="page">
      <Header favoritesCount={favoritesCount} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className={`favorites${offers.length === 0 ? ' favorites--empty' : ''}`}>
            <h1 className="favorites__title">Saved listing</h1>
            {offers.length === 0 ? <p className="favorites__status">Nothing yet saved.</p> : (
              <ul className="favorites__list">
                {cities.map((city) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppPath.main}><span>{city}</span></Link>
                      </div>
                    </div>
                    <OffersList offers={offers.filter((offer) => offer.city.name === city)} variant="favorites" />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppPath.main}>
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;

