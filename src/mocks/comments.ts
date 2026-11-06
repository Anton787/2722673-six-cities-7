import type {Review} from '@/types/offer';

export const comments: Record<string, Review[]> = {
  '1': [
    {
      id: '1',
      date: '2026-04-24T12:00:00.000Z',
      user: {name: 'Max', avatarUrl: '/img/avatar-max.jpg', isPro: false},
      comment: 'A quiet and comfortable apartment near the canals. The kitchen had everything we needed for our stay.',
      rating: 4,
    },
  ],
  '2': [
    {
      id: '2',
      date: '2026-05-12T12:00:00.000Z',
      user: {name: 'Angelina', avatarUrl: '/img/avatar-angelina.jpg', isPro: true},
      comment: 'A lovely room with a comfortable bed. The host was welcoming and the location was convenient.',
      rating: 5,
    },
  ],
};
