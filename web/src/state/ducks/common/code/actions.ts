import {
  CodeListRequest,
  CodeListResponse,
  CodeName,
} from 'src/state/api-models/code';
import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';

// Create the set of async actions
export const getCodeList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<
  CodeListRequest,
  { responseData: CodeListResponse; codeName: CodeName },
  { errors: any; codeName: CodeName }
>();
