export const FETCH_DETAILS = 'giftcard/details';
export const FETCH_DETAILS_SUCCESS = 'giftcard/details_success';
export const FETCH_DETAILS_FAILED = 'giftcard/details_failed';

export const FETCH_LIST = 'giftcard/list';
export const FETCH_LIST_SUCCESS = 'giftcard/list_success';
export const FETCH_LIST_FAILED = 'giftcard/list_failed';

export const CREATE = 'giftcard/create';
export const CREATE_SUCCESS = 'giftcard/create_success';
export const CREATE_FAILED = 'giftcard/create_failed';

export const UPDATE = 'giftcard/update';
export const UPDATE_SUCCESS = 'giftcard/update_success';
export const UPDATE_FAILED = 'giftcard/update_failed';

export const DELETE = 'giftcard/detele';
export const DELETE_SUCCESS = 'giftcard/detele_success';
export const DELETE_FAILED = 'giftcard/detele_failed';

export const BULK = 'giftcard/bulk';
export const BULK_SUCCESS = 'giftcard/bulk_success';
export const BULK_FAILED = 'giftcard/bulk_failed';

export const GET_GIFTCARD_NUMBER = 'giftcard/get_giftcard_number';
export const GET_GIFTCARD_NUMBER_SUCCESS = 'giftcard/get_giftcard_number_success';
export const GET_GIFTCARD_NUMBER_FAILED = 'giftcard/get_giftcard_number_failed';

export type GiftcardAction =
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
