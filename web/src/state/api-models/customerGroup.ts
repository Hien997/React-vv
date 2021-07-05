
import { CommonRequest, CommonResponse, SearchRequest, BulkRequest, PaginationResponse } from './common';
import { CustomersGroup } from '../models/customer';

export type CustomersGroupListRequest = (SearchRequest & {}) | undefined;
export type CustomersGroupListResponse = CommonResponse & {
  data?: {
    customersGroup: CustomersGroup[];
    pagination: PaginationResponse;
  };
};

export type CustomersGroupDetailRequest = CommonRequest & {};
export type CustomersGroupDetailResponse = CommonResponse & {
  data?: CustomersGroup;
};

export type CustomersGroupCreateRequest = CommonRequest & {};
export type CustomersGroupCreateResponse = CommonResponse & {
  data?: CustomersGroup;
};

export type CustomersGroupUpdateRequest = CommonRequest & {};
export type CustomersGroupUpdateResponse = CommonResponse & {
  data?: CustomersGroup;
};

export type CustomersGroupDeleteRequest = CommonRequest & { id: string };
export type CustomersGroupDeleteResponse = CommonResponse & {};

export type CustomersGroupBulkRequest = BulkRequest & {};
export type CustomersGroupBulkResponse = CommonResponse & {};