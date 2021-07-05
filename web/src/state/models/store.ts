import { Timestamp, SoftDelete } from './common';

export type StoreForm = {
  store_name: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  country_id?: number;
  timezone?: string;
  telephone?: string;
  fax?: string;
  licence_code?: string;
  store_logo?: string;
  store_banner?: string;
  published?: number;
};

export type Store = StoreForm &
  Timestamp &
  SoftDelete & {
    id: string;
  };
