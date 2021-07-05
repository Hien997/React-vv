import { BaseState } from '../models';
import {
  SupplierListResponse,
  SupplierDetailResponse,
  SupplierDeleteResponse,
  SupplierUpdateResponse,
  SupplierCreateResponse,
  SupplierBulkResponse,
} from '../../api-models/supplier';

export type SupplierDetails = BaseState<SupplierDetailResponse>;
export type SupplierList = BaseState<SupplierListResponse>;
export type SupplierCreate = BaseState<SupplierCreateResponse>;
export type SupplierUpdate = BaseState<SupplierUpdateResponse>;
export type SupplierDelete = BaseState<SupplierDeleteResponse>;
export type SupplierBulk = BaseState<SupplierBulkResponse>;

export type SupplierState = {
  list: SupplierList;
  details: SupplierDetails;
  create: SupplierCreate;
  update: SupplierUpdate;
  delete: SupplierDelete;
  bulk: SupplierBulk;
};

export const initialSupplierState = {
  list: { loading: false, response: undefined },
  details: { loading: false, response: undefined },
  create: { loading: false, response: undefined },
  update: { loading: false, response: undefined },
  delete: { loading: false, response: undefined },
  bulk: { loading: false, response: undefined },
};

export const initialPaginationState = {
  items_per_page: 5,
  page: 1,
  total_pages: 0,
  total_items: 0,
};

declare module './../models' {
  interface StateAll {
    // match to a duck folder
    supplier: {
      supplier: SupplierState;
    };
  }
}
