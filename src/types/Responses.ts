import { Phone } from './Phone';
import { User } from './User';

export type LoginResponse = {
  accessToken: string,
  user: User,
};

export type PhoneResponse = {
  rows: Phone[];
  count: number;
};
