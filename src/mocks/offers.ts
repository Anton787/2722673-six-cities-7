import type {Offer} from '@/types/offer';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    previewImage: '/img/apartment-01.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    city: {
      name: 'Amsterdam',
      location: {latitude: 52.37403, longitude: 4.88969, zoom: 12},
    },
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16},
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    previewImage: '/img/room.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 4,
    city: {
      name: 'Amsterdam',
      location: {latitude: 52.37403, longitude: 4.88969, zoom: 12},
    },
    location: {latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 16},
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    previewImage: '/img/apartment-02.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 4.3,
    city: {
      name: 'Amsterdam',
      location: {latitude: 52.37403, longitude: 4.88969, zoom: 12},
    },
    location: {latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16},
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    previewImage: '/img/apartment-03.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 5,
    city: {
      name: 'Amsterdam',
      location: {latitude: 52.37403, longitude: 4.88969, zoom: 12},
    },
    location: {latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 16},
  },
];
