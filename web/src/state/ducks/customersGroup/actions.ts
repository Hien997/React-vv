import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';
import {
  CustomersGroupListRequest,
  CustomersGroupListResponse,
  CustomersGroupDeleteResponse,
  CustomersGroupUpdateResponse,
  CustomersGroupCreateResponse,
  CustomersGroupDetailResponse,
  CustomersGroupBulkResponse,
  CustomersGroupBulkRequest,
} from '../../api-models/customerGroup';
import { CustomersGroup } from '../../models/customer';

// Create the set of async actions
export const getCustomersGroupList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<CustomersGroupListRequest, CustomersGroupListResponse, any>();

// Create the set of async actions
export const getCustomersGroupDetails = createAsyncAction(
  types.FETCH_DETAILS,
  types.FETCH_DETAILS_SUCCESS,
  types.FETCH_DETAILS_FAILED
)<string, CustomersGroupDetailResponse, any>();

// Create the set of async actions
export const createCustomersGroup = createAsyncAction(
  types.CREATE,
  types.CREATE_SUCCESS,
  types.CREATE_FAILED
)<CustomersGroup, CustomersGroupCreateResponse, any>();

// Create the set of async actions
export const updateCustomersGroup = createAsyncAction(
  types.UPDATE,
  types.UPDATE_SUCCESS,
  types.UPDATE_FAILED
)<CustomersGroup, CustomersGroupUpdateResponse, any>();

// Create the set of async actions
export const deleteCustomersGroup = createAsyncAction(
  types.DELETE,
  types.DELETE_SUCCESS,
  types.DELETE_FAILED
)<string, CustomersGroupDeleteResponse, any>();

// Create the set of async actions
export const bulkCustomersGroup = createAsyncAction(
  types.BULK,
  types.BULK_SUCCESS,
  types.BULK_FAILED
)<CustomersGroupBulkRequest, CustomersGroupBulkResponse, any>();