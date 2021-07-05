import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';
import {
  ServiceBulkRequest,
  ServiceBulkResponse,
  ServiceCreateResponse,
  ServiceCreateRequest,
  ServiceDeleteResponse,
  ServiceDetailResponse,
  ServiceListRequest,
  ServiceListResponse,
  ServiceUpdateResponse,
  ServiceUpdateRequest,
  ServiceImportRequest,
  ServiceImportResponse
} from '../../api-models/service';

// Create the set of async actions
export const getServiceList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<ServiceListRequest, ServiceListResponse, any>();

// Create the set of async actions
export const importService = createAsyncAction(
  types.IMPORT_EXCEL,
  types.IMPORT_EXCEL_SUCCESS,
  types.IMPORT_EXCEL_FAILED
)<ServiceImportRequest, ServiceImportResponse, any>();

// Create the set of async actions
export const getServiceDetails = createAsyncAction(
  types.FETCH_DETAILS,
  types.FETCH_DETAILS_SUCCESS,
  types.FETCH_DETAILS_FAILED
)<string, ServiceDetailResponse, any>();

// Create the set of async actions
export const createService = createAsyncAction(
  types.CREATE,
  types.CREATE_SUCCESS,
  types.CREATE_FAILED
)<ServiceCreateRequest, ServiceCreateResponse, any>();

// Create the set of async actions
export const updateService = createAsyncAction(
  types.UPDATE,
  types.UPDATE_SUCCESS,
  types.UPDATE_FAILED
)<ServiceUpdateRequest, ServiceUpdateResponse, any>();

// Create the set of async actions
export const deleteService = createAsyncAction(
  types.DELETE,
  types.DELETE_SUCCESS,
  types.DELETE_FAILED
)<string, ServiceDeleteResponse, any>();

// Create the set of async actions
export const bulkService = createAsyncAction(
  types.BULK,
  types.BULK_SUCCESS,
  types.BULK_FAILED
)<ServiceBulkRequest, ServiceBulkResponse, any>();
