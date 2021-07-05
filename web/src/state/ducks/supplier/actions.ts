import { createAsyncAction } from 'typesafe-actions';
import { Supplier } from 'src/state/models/supplier';
import {
  SupplierBulkRequest,
  SupplierBulkResponse,
  SupplierCreateResponse,
  SupplierDeleteResponse,
  SupplierDetailResponse,
  SupplierListRequest,
  SupplierListResponse,
  SupplierUpdateResponse,
} from '../../api-models/supplier';
import * as types from './types';

// Create the set of async actions
export const getSupplierList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<SupplierListRequest, SupplierListResponse, any>();

// Create the set of async actions
export const getSupplierDetails = createAsyncAction(
  types.FETCH_DETAILS,
  types.FETCH_DETAILS_SUCCESS,
  types.FETCH_DETAILS_FAILED
)<number | undefined, SupplierDetailResponse, any>();

// Create the set of async actions
export const createSupplier = createAsyncAction(
  types.CREATE,
  types.CREATE_SUCCESS,
  types.CREATE_FAILED
)<Supplier, SupplierCreateResponse, any>();

// Create the set of async actions
export const updateSupplier = createAsyncAction(
  types.UPDATE,
  types.UPDATE_SUCCESS,
  types.UPDATE_FAILED
)<Supplier, SupplierUpdateResponse, any>();

// Create the set of async actions
export const deleteSupplier = createAsyncAction(
  types.DELETE,
  types.DELETE_SUCCESS,
  types.DELETE_FAILED
)<number, SupplierDeleteResponse, any>();

export const bulkSuppliers = createAsyncAction(
  types.BULK,
  types.BULK_SUCCESS,
  types.BULK_FAILED
)<SupplierBulkRequest, SupplierBulkResponse, any>();
