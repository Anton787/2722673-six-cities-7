export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: string;
  location: Location;
}

export interface Host {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export interface BaseOffer {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  city: City;
  location: Location;
}

export interface Offer extends BaseOffer {
  previewImage: string;
}

export interface DetailedOffer extends BaseOffer {
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  description: string;
  host: Host;
}

export interface ReviewInput {
  comment: string;
  rating: number;
}

export interface Review extends ReviewInput {
  id: string;
  date: string;
  user: Host;
}
