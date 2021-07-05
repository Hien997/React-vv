import { BaseState } from '../models';
import {
  CustomerListResponse,
  CustomerDetailResponse,
  CustomerDeleteResponse,
  CustomerUpdateResponse,
  CustomerCreateResponse,
  CustomerBulkResponse,
  CustomerHistoryPointResponse,
  CustomerReviewsResponse,
  CustomerImportResponse,
} from '../../api-models/customer';
import { InputSearchCustomer } from '../../models/customer';

export type CustomerDetails = BaseState<CustomerDetailResponse> & {};
export type CustomerList = BaseState<CustomerListResponse> & {};
export type CustomerCreate = BaseState<CustomerCreateResponse> & {};
export type CustomerUpdate = BaseState<CustomerUpdateResponse> & {};
export type CustomerDelete = BaseState<CustomerDeleteResponse> & {};
export type CustomerBulk = BaseState<CustomerBulkResponse> & {};
export type CustomerImport = BaseState<CustomerImportResponse> & {};
export type CustomerInputSearch = InputSearchCustomer;
export type CustomersHistoryPoint = BaseState<CustomerHistoryPointResponse> & {};
export type CustomersReviews = BaseState<CustomerReviewsResponse> & {};
export type CustomerState = {
  list: CustomerList;
  details: CustomerDetails;
  create: CustomerCreate;
  update: CustomerUpdate;
  delete: CustomerDelete;
  bulk: CustomerBulk;
  import:CustomerImport;
  paraSearch:CustomerInputSearch;
  listHistoryPoint:CustomersHistoryPoint;
  listReviews:CustomersReviews;
};

export const initialCustomerState: CustomerState = {
  list: { loading: false, response: undefined },
  details: { loading: false, response: undefined },
  create: { loading: false, response: undefined },
  update: { loading: false, response: undefined },
  delete: { loading: false, response: undefined },
  bulk: { loading: false, response: undefined },
  import: { loading: false, response: undefined },
  paraSearch: {},
  listHistoryPoint: {loading: false, response: undefined},
  listReviews:{loading: false, response: undefined},
};

declare module './../models' {
  interface StateAll {
    // match to a duck folder
    customer: {
      // match to reducer name, each reducer will be one field in state
      customer: CustomerState;
    };
  }
}
