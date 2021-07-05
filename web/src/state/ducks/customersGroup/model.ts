import { BaseState } from '../models';
import {
  CustomersGroupListResponse,
  CustomersGroupDetailResponse,
  CustomersGroupDeleteResponse,
  CustomersGroupUpdateResponse,
  CustomersGroupCreateResponse,
  CustomersGroupBulkResponse,
} from '../../api-models/customerGroup';

export type CustomersGroupDetails = BaseState<CustomersGroupDetailResponse> & {};
export type CustomersGroupList = BaseState<CustomersGroupListResponse> & {};
export type CustomersGroupCreate = BaseState<CustomersGroupCreateResponse> & {};
export type CustomersGroupUpdate = BaseState<CustomersGroupUpdateResponse> & {};
export type CustomersGroupDelete = BaseState<CustomersGroupDeleteResponse> & {};
export type CustomersGroupBulk = BaseState<CustomersGroupBulkResponse> & {};
export type CustomersGroupState = {
  list: CustomersGroupList;
  details: CustomersGroupDetails;
  create: CustomersGroupCreate;
  update: CustomersGroupUpdate;
  delete: CustomersGroupDelete;
  bulk: CustomersGroupBulk;
};

export const initialCustomersGroupState: CustomersGroupState = {
  list: { loading: false, response: undefined },
  details: { loading: false, response: undefined },
  create: { loading: false, response: undefined },
  update: { loading: false, response: undefined },
  delete: { loading: false, response: undefined },
  bulk: { loading: false, response: undefined },
};

declare module './../models' {
  interface StateAll {
    // match to a duck folder
    customersGroup: {
      // match to reducer name, each reducer will be one field in state
      customersGroup: CustomersGroupState;
    };
  }
}
