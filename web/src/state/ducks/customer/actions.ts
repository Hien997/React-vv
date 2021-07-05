import { createAsyncAction, createAction } from 'typesafe-actions';
import * as types from './types';
import {
  CustomerListRequest,
  CustomerListResponse,
  CustomerDeleteResponse,
  CustomerUpdateResponse,
  CustomerCreateResponse,
  CustomerDetailResponse,
  CustomerBulkResponse,
  CustomerBulkRequest,
  CustomerImportRequest,
  CustomerImportResponse,
} from '../../api-models/customer';
import { Customer, InputSearchCustomer, InputSearchCustomerDetail, CustomersReviews, CustomersHistoryPoint } from '../../models/customer';

// Create the set of async actions
export const getCustomerList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<CustomerListRequest, CustomerListResponse, any>();

// Create the set of async actions
export const getCustomerDetails = createAsyncAction(
  types.FETCH_DETAILS,
  types.FETCH_DETAILS_SUCCESS,
  types.FETCH_DETAILS_FAILED
)<string, CustomerDetailResponse, any>();

// Create the set of async actions
export const createCustomer = createAsyncAction(
  types.CREATE,
  types.CREATE_SUCCESS,
  types.CREATE_FAILED
)<FormData, CustomerCreateResponse, any>();

// Create the set of async actions
export const updateCustomer = createAsyncAction(
  types.UPDATE,
  types.UPDATE_SUCCESS,
  types.UPDATE_FAILED
)<FormData, CustomerUpdateResponse, any>();

// Create the set of async actions
export const deleteCustomer = createAsyncAction(
  types.DELETE,
  types.DELETE_SUCCESS,
  types.DELETE_FAILED
)<string, CustomerDeleteResponse, any>();

// Create the set of async actions
export const bulkCustomer = createAsyncAction(
  types.BULK,
  types.BULK_SUCCESS,
  types.BULK_FAILED
)<CustomerBulkRequest, CustomerBulkResponse, any>();

// Create the set of async actions
export const importCustomer = createAsyncAction(
  types.IMPORT,
  types.IMPORT_SUCCESS,
  types.IMPORT_FAILED
)<CustomerImportRequest, CustomerImportResponse, any>();

// Create the set actions
export const inputSearchCustomer = createAction(
  types.INPUTSEARCH,
)<InputSearchCustomer>();

export const historyPointAction = createAsyncAction(
  types.HISTORYPOINT,
  types.HISTORYPOINT_SUCCESS,
  types.HISTORYPOINT_FAILED,
)<InputSearchCustomerDetail, CustomersHistoryPoint, any>();

export const reviewsAction = createAsyncAction(
  types.REVIEWS,
  types.REVIEWS_SUCCESS,
  types.REVIEWS_FAILED,
)<InputSearchCustomerDetail, CustomersReviews, any>();