import {
  CommonRequest,
  CommonResponse,
  SearchRequest,
  PaginationResponse,
} from './common';
import { Supplier, SupplierForm } from '../models/supplier';

export type SupplierListRequest = (SearchRequest & {}) | undefined;
export type SupplierListResponse = CommonResponse & {
  data: {
    list: Supplier[];
    pagination: PaginationResponse;
  };
};

export type SupplierCreateRequest = CommonRequest & SupplierForm;

export type SupplierUpdateRequest = CommonResponse &
  SupplierForm & {
    id: number;
  };

export type SupplierCreateResponse = CommonResponse & {
  data: Supplier;
};

export type SupplierUpdateResponse = CommonRequest & {
  data: Supplier;
};

export type SupplierDetailResponse = CommonResponse & {
  data: Supplier;
};

export type SupplierDetailRequest = CommonRequest & {
  id: string;
};

export type SupplierDeleteRequest = CommonRequest & {
  id: string;
};

export type SupplierDeleteResponse = CommonResponse;

export type SupplierBulkRequest = {
  action: string;
  ids: number[];
};
export type SupplierBulkResponse = CommonResponse;
