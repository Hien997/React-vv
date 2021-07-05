
export const FETCH_LIST = 'membership/list';
export const FETCH_LIST_SUCCESS = 'membership/list_success';
export const FETCH_LIST_FAILED = 'membership/list_failed';


export const CREATE = 'membership/create';
export const CREATE_SUCCESS = 'membership/create_success';
export const CREATE_FAILED = 'membership/create_failed';

export const UPDATE = 'membership/update';
export const UPDATE_SUCCESS = 'membership/update_success';
export const UPDATE_FAILED = 'membership/update_failed';

export const DETAIL = 'membership/detail';
export const DETAIL_SUCCESS = 'membership/detail_success';
export const DETAIL_FAILED = 'membership/detail_failed';

export const DELETE = 'membership/delete';
export const DELETE_SUCCESS = 'membership/delete_success';
export const DELETE_FAILED = 'membership/delete_failed';

export const HISTORY = 'membership/history';
export const HISTORY_SUCCESS = 'membership/history_success';
export const HISTORY_FAILED = 'membership/history_failed';

export type MemberAction =
  | typeof FETCH_LIST
  | typeof FETCH_LIST_FAILED
  | typeof FETCH_LIST_SUCCESS
  | typeof CREATE
  | typeof CREATE_SUCCESS
  | typeof CREATE_FAILED
  | typeof UPDATE
  | typeof UPDATE_SUCCESS
  | typeof UPDATE_FAILED
  | typeof DETAIL
  | typeof DETAIL_SUCCESS
  | typeof DETAIL_FAILED
  | typeof DELETE
  | typeof DELETE_SUCCESS
  | typeof DELETE_FAILED
  | typeof HISTORY
  | typeof HISTORY_SUCCESS
  | typeof HISTORY_FAILED;