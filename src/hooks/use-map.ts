import {useEffect, useState} from 'react';
import type {RefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import type {City} from '@/types/offer';
import {MAP_MAX_ZOOM, MAP_TILE_URL} from '@/constants/map';

function useMap(mapRef: RefObject<HTMLElement>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const {latitude, longitude, zoom} = city.location;

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const instance = new Map(mapRef.current, {
      center: [latitude, longitude],
      zoom,
    });

    new TileLayer(MAP_TILE_URL, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: MAP_MAX_ZOOM,
    }).addTo(instance);

    setMap(instance);

    return () => {
      instance.remove();
    };
  }, [mapRef, latitude, longitude, zoom]);

  return map;
}

export default useMap;
