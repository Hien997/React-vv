import { Timestamp, SoftDelete } from './common';

export type SupplierForm = {
  store_id: string;
  company_name: string;
  account_no?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  country_id?: number;
  email?: string;
  telephone?: string;
  comment?: string;
};

export type Supplier = SupplierForm &
  Timestamp &
  SoftDelete & {
    id: number;
  };
