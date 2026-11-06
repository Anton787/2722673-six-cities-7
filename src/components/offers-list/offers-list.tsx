import {useState} from 'react';
import OfferCard from '@components/offer-card/offer-card';
import {Offer} from '@/types/offer';

type OffersListProps = {
  offers: Offer[];
  variant?: 'cities' | 'favorites' | 'near-places';
};

function OffersList({offers, variant = 'cities'}: OffersListProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const listClassName = variant === 'favorites' ? 'favorites__places' : `${variant}__list places__list`;

  return (
    <div
      className={variant === 'cities' ? 'cities__places-list places__list tabs__content' : listClassName}
      data-active-offer-id={activeOfferId ?? undefined}
    >
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} variant={variant} onActiveOfferChange={setActiveOfferId} />
      ))}
    </div>
  );
}

export default OffersList;
