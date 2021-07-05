export const FETCH_LIST = 'code/list';
export const FETCH_LIST_SUCCESS = 'code/list_success';
export const FETCH_LIST_FAILED = 'code/list_failed';

export type CodeAction =
  | typeof FETCH_LIST
  | typeof FETCH_LIST_FAILED
  | typeof FETCH_LIST_SUCCESS;
