
import { CommonRequest, CommonResponse, SearchRequest, BulkRequest, PaginationResponse } from './common';
import { Customer, CustomersHistoryPoint, CustomersReviews } from '../models/customer';

export type CustomerListRequest = (SearchRequest & {}) | undefined;
export type CustomerListResponse = CommonResponse & {
  data?: {
    customers: Customer[];
    pagination: PaginationResponse;
  };
};

export type CustomerDetailRequest = CommonRequest & {};
export type CustomerDetailResponse = CommonResponse & {
  data?: Customer;
};

export type CustomerCreateRequest = CommonRequest & {};
export type CustomerCreateResponse = CommonResponse & {
  data?: Customer;
};

export type CustomerUpdateRequest = CommonRequest & {};
export type CustomerUpdateResponse = CommonResponse & {
  data?: Customer;
};

export type CustomerDeleteRequest = CommonRequest & { id: string };
export type CustomerDeleteResponse = CommonResponse & {};

export type CustomerBulkRequest = BulkRequest;
export type CustomerBulkResponse = CommonResponse & {};

export type CustomerImportRequest = CommonRequest & { formdata?: FormData };
export type CustomerImportResponse = CommonResponse & {};

export type CustomerHistoryPointRequest = CommonRequest & {};
export type CustomerHistoryPointResponse = CommonResponse & {
  data?: {
    customersHistoriesPoint: CustomersHistoryPoint[];
    pagination: PaginationResponse;
  };
};

export type CustomerReviewsRequest = CommonRequest & {};
export type CustomerReviewsResponse = CommonResponse & {
  data?: {
    customersReviews: CustomersReviews[];
    pagination: PaginationResponse;
  };
};