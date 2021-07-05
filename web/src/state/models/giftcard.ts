import { Service } from './service';
import { Module } from './module';

export type Giftcard = {
  id: string;
  user_id: string;
  store_id: string;
  employee_name: string;
  giftcard_number: string;
  value: string;
  value_use: string;
  effective_start: string;
  effective_end: string;
  balance: string;
  published: string;
  giftcard_histories: HistoryGiftcard[];
  services: Service[];
  modules: Module[];
};

export type HistoryGiftcard = {
  user_id: string;
  store_id: string;
  giftcard_id: string;
  value: string;
  action: string;
  date: string;
  updated_at?: string;
};
