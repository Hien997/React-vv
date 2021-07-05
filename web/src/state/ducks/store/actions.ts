import { createAsyncAction } from 'typesafe-actions';
import {
  StoreListRequest,
  StoreListResponse,
} from '../../api-models/store';
import * as types from './types';

// Create the set of async actions
export const getStoreList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<StoreListRequest, StoreListResponse, any>();

