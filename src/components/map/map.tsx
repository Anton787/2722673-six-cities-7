import {useEffect, useRef} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '@/hooks/use-map';
import type {City, Offer} from '@/types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
};

const OFFER_ICON = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({city, offers}: MapProps) {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (!map) {
      return;
    }

    const markersLayer = layerGroup().addTo(map);

    offers.forEach((offer) => {
      new Marker([offer.location.latitude, offer.location.longitude], {
        icon: OFFER_ICON,
        title: offer.title,
      }).addTo(markersLayer);
    });

    return () => {
      map.removeLayer(markersLayer);
    };
  }, [map, offers]);

  return <section className="cities__map map" ref={mapRef} aria-label={`Rental offers in ${city.name}`} />;
}

export default Map;
