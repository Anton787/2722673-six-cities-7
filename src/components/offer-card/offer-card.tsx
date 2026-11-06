import {generatePath, Link} from 'react-router-dom';
import {AppPath} from '@router/paths';
import {Offer} from '@/types/offer';

type OfferCardProps = {
  offer: Offer;
  variant?: 'cities' | 'favorites' | 'near-places';
  onActiveOfferChange?: (id: string | null) => void;
};

function OfferCard({offer, variant = 'cities', onActiveOfferChange}: OfferCardProps) {
  const offerPath = generatePath(AppPath.offer, {id: offer.id});
  const isCompact = variant === 'favorites';
  return (
    <article
      className={`${variant}__card place-card`}
      onMouseEnter={() => onActiveOfferChange?.(offer.id)}
      onMouseLeave={() => onActiveOfferChange?.(null)}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${variant}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerPath}>
          <img className="place-card__image" src={offer.previewImage} width={isCompact ? 150 : 260} height={isCompact ? 110 : 200} alt={offer.title} />
        </Link>
      </div>
      <div className={isCompact ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerPath}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>
  );
}

export default OfferCard;

