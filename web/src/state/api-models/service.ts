import { Pagination } from 'reactstrap';
import {
  CommonRequest,
  CommonResponse,
  SearchRequest,
  BulkRequest,
} from './common';
import { Service } from '../models/service';

export type ServiceListRequest = (SearchRequest & {}) | undefined;
export type ServiceListResponse = CommonResponse & {
  data?: {
    services: Service[];
    pagination: Pagination;
  };
};

export type ServiceDetailRequest = CommonRequest & {};
export type ServiceDetailResponse = CommonResponse & {
  data?: Service;
};

export type ServiceCreateRequest = CommonRequest & {
  id?: string,
  user_id?: string,
  store_id?: string,
  category_id?: string,
  supplier_id?: string,
  sku?: string,
  name?: string,
  short_name?: string,
  unit_type?: number,
  supply_price?: number,
  cost_price?: number,
  unit_price?: number,
  deductible_amount?: number,
  deductible_amount_type?: number,
  allow_alt_description?: boolean,
  ordering?: number,
  points?: number,
  number_turn?: number,
  red_time?: number,
  yellow_time?: number,
  delay_time?: number,
  finish_time?: number,
  bg_color?: string
  font_color?: string,
  published?: number
};
export type ServiceCreateResponse = CommonResponse & {
  data?: Service;
};

export type ServiceUpdateRequest = CommonRequest & {
  id?: string,
  user_id?: string,
  store_id?: string,
  category_id?: string,
  supplier_id?: string,
  sku?: string,
  name?: string,
  short_name?: string,
  unit_type?: number,
  supply_price?: number,
  cost_price?: number,
  unit_price?: number,
  deductible_amount?: number,
  deductible_amount_type?: number,
  allow_alt_description?: boolean,
  ordering?: number,
  points?: number,
  number_turn?: number,
  red_time?: number,
  yellow_time?: number,
  delay_time?: number,
  finish_time?: number,
  bg_color?: string
  font_color?: string,
  published?: number
};

export type ServiceUpdateResponse = CommonResponse & {
  data?: Service;
};

export type ServiceDeleteRequest = CommonRequest & { id: string };
export type ServiceDeleteResponse = CommonResponse & {};

export type ServiceBulkRequest = BulkRequest & {};
export type ServiceBulkResponse = CommonResponse & {};



export type ServiceImportResponse = CommonResponse & {

};

export type ServiceImportRequest = CommonRequest & {
  file: File
};