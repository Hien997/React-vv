import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';
import {
  EmployeeListRequest,
  EmployeeListResponse,
  EmployeeDeleteResponse,
  EmployeeUpdateResponse,
  EmployeeCreateResponse,
  EmployeeDetailResponse,
  EmployeeBulkRequest,
  EmployeeBulkResponse,
  EmployeeImportRequest,
  EmployeeImportResponse,
} from '../../api-models/employee';
import { Employee } from '../../models/employee';

// Create the set of async actions
export const getEmployeeList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<EmployeeListRequest, EmployeeListResponse, any>();

// Create the set of async actions
export const getEmployeeDetails = createAsyncAction(
  types.FETCH_DETAILS,
  types.FETCH_DETAILS_SUCCESS,
  types.FETCH_DETAILS_FAILED
)<string, EmployeeDetailResponse, any>();

// Create the set of async actions
export const createEmployee = createAsyncAction(
  types.CREATE,
  types.CREATE_SUCCESS,
  types.CREATE_FAILED
)<Employee, EmployeeCreateResponse, any>();

// Create the set of async actions
export const updateEmployee = createAsyncAction(
  types.UPDATE,
  types.UPDATE_SUCCESS,
  types.UPDATE_FAILED
)<Employee, EmployeeUpdateResponse, any>();

// Create the set of async actions
export const deleteEmployee = createAsyncAction(
  types.DELETE,
  types.DELETE_SUCCESS,
  types.DELETE_FAILED
)<string, EmployeeDeleteResponse, any>();

// Create the set of async actions
export const bulkEmployees = createAsyncAction(
  types.BULK,
  types.BULK_SUCCESS,
  types.BULK_FAILED
)<EmployeeBulkRequest, EmployeeBulkResponse, any>();

// Create the set of async actions
export const importEmployee = createAsyncAction(
  types.IMPORT_EXCEL,
  types.IMPORT_EXCEL_SUCCESS,
  types.IMPORT_EXCEL_FAILED
)<EmployeeImportRequest, EmployeeImportResponse, any>();
