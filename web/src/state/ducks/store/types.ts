export const FETCH_LIST = 'store/list';
export const FETCH_LIST_SUCCESS = 'store/list_success';
export const FETCH_LIST_FAILED = 'store/list_failed';

export type SupplierAction =
  | typeof FETCH_LIST
  | typeof FETCH_LIST_FAILED
  | typeof FETCH_LIST_SUCCESS;
