export const FETCH_DETAILS = 'employee/details';
export const FETCH_DETAILS_SUCCESS = 'employee/details_success';
export const FETCH_DETAILS_FAILED = 'employee/details_failed';

export const FETCH_LIST = 'employee/list';
export const FETCH_LIST_SUCCESS = 'employee/list_success';
export const FETCH_LIST_FAILED = 'employee/list_failed';

export const CREATE = 'employee/create';
export const CREATE_SUCCESS = 'employee/create_success';
export const CREATE_FAILED = 'employee/create_failed';

export const UPDATE = 'employee/update';
export const UPDATE_SUCCESS = 'employee/update_success';
export const UPDATE_FAILED = 'employee/update_failed';

export const DELETE = 'employee/detele';
export const DELETE_SUCCESS = 'employee/detele_success';
export const DELETE_FAILED = 'employee/detele_failed';

export const BULK = 'employee/bulk';
export const BULK_SUCCESS = 'employee/bulk_success';
export const BULK_FAILED = 'employee/bulk_failed';

export const IMPORT_EXCEL = 'employee/import';
export const IMPORT_EXCEL_SUCCESS = 'employee/import_success';
export const IMPORT_EXCEL_FAILED = 'employee/import_failed';

export type EmployeeAction =
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
  | typeof BULK_SUCCESS
  | typeof IMPORT_EXCEL
  | typeof IMPORT_EXCEL_FAILED
  | typeof IMPORT_EXCEL_SUCCESS;
