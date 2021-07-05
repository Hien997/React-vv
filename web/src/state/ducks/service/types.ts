export const FETCH_DETAILS = 'service/details';
export const FETCH_DETAILS_SUCCESS = 'service/details_success';
export const FETCH_DETAILS_FAILED = 'service/details_failed';

export const FETCH_LIST = 'service/list';
export const FETCH_LIST_SUCCESS = 'service/list_success';
export const FETCH_LIST_FAILED = 'service/list_failed';

export const CREATE = 'service/create';
export const CREATE_SUCCESS = 'service/create_success';
export const CREATE_FAILED = 'service/create_failed';

export const UPDATE = 'service/update';
export const UPDATE_SUCCESS = 'service/update_success';
export const UPDATE_FAILED = 'service/update_failed';

export const DELETE = 'service/detele';
export const DELETE_SUCCESS = 'service/detele_success';
export const DELETE_FAILED = 'service/detele_failed';

export const IMPORT_EXCEL = 'service/import';
export const IMPORT_EXCEL_SUCCESS = 'service/import_success';
export const IMPORT_EXCEL_FAILED = 'service/import_failed';

export const BULK = 'service/bulk';
export const BULK_SUCCESS = 'service/bulk_success';
export const BULK_FAILED = 'service/bulk_failed';

export type ServiceAction =
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
