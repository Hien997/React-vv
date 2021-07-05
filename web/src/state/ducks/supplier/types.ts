export const FETCH_DETAILS = 'supplier/details';
export const FETCH_DETAILS_SUCCESS = 'supplier/details_success';
export const FETCH_DETAILS_FAILED = 'supplier/details_failed';

export const FETCH_LIST = 'supplier/list';
export const FETCH_LIST_SUCCESS = 'supplier/list_success';
export const FETCH_LIST_FAILED = 'supplier/list_failed';

export const CREATE = 'supplier/create';
export const CREATE_SUCCESS = 'supplier/create_success';
export const CREATE_FAILED = 'supplier/create_failed';

export const UPDATE = 'supplier/update';
export const UPDATE_SUCCESS = 'supplier/update_success';
export const UPDATE_FAILED = 'supplier/update_failed';

export const DELETE = 'supplier/detele';
export const DELETE_SUCCESS = 'supplier/detele_success';
export const DELETE_FAILED = 'supplier/detele_failed';

export const BULK = 'supplier/bulk';
export const BULK_SUCCESS = 'supplier/bulk_success';
export const BULK_FAILED = 'supplier/bulk_failed';

export type SupplierAction =
  | typeof FETCH_DETAILS
  | typeof FETCH_DETAILS_FAILED
  | typeof FETCH_DETAILS_SUCCESS
  | typeof FETCH_LIST
  | typeof FETCH_LIST_FAILED
  | typeof FETCH_LIST_SUCCESS
  | typeof CREATE
  | typeof CREATE_FAILED
  | typeof CREATE_SUCCESS
  | typeof UPDATE
  | typeof UPDATE_FAILED
  | typeof UPDATE_SUCCESS
  | typeof DELETE
  | typeof DELETE_FAILED
  | typeof DELETE_SUCCESS
  | typeof BULK
  | typeof BULK_FAILED
  | typeof BULK_SUCCESS;
