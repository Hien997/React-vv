import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';
import {
  GiftcardListRequest,
  GiftcardListResponse,
  GiftcardDeleteResponse,
  GiftcardUpdateResponse,
  GiftcardCreateResponse,
  GiftcardDetailResponse,
  GiftcardBulkRequest,
  GiftcardBulkResponse,
  GiftcardUpdateRequest,
} from '../../api-models/giftcard';
import { Giftcard } from '../../models/giftcard';

// Create the set of async actions
export const getGiftcardList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<GiftcardListRequest, GiftcardListResponse, any>();

// Create the set of async actions
export const getGiftcardDetails = createAsyncAction(
  types.FETCH_DETAILS,
  types.FETCH_DETAILS_SUCCESS,
  types.FETCH_DETAILS_FAILED
)<string, GiftcardDetailResponse, any>();

// Create the set of async actions
export const createGiftcard = createAsyncAction(
  types.CREATE,
  types.CREATE_SUCCESS,
  types.CREATE_FAILED
)<Giftcard, GiftcardCreateResponse, any>();

// Create the set of async actions
export const updateGiftcard = createAsyncAction(
  types.UPDATE,
  types.UPDATE_SUCCESS,
  types.UPDATE_FAILED
)<GiftcardUpdateRequest, GiftcardUpdateResponse, any>();

// Create the set of async actions
export const deleteGiftcard = createAsyncAction(
  types.DELETE,
  types.DELETE_SUCCESS,
  types.DELETE_FAILED
)<string, GiftcardDeleteResponse, any>();

// Create the set of async actions
export const bulkGiftcards = createAsyncAction(
  types.BULK,
  types.BULK_SUCCESS,
  types.BULK_FAILED
)<GiftcardBulkRequest, GiftcardBulkResponse, any>();

// Create the set of async actions
export const getGiftcardNumberGiftcards = createAsyncAction(
  types.GET_GIFTCARD_NUMBER,
  types.GET_GIFTCARD_NUMBER_SUCCESS,
  types.GET_GIFTCARD_NUMBER_FAILED
)<GiftcardBulkRequest, GiftcardBulkResponse, any>();
