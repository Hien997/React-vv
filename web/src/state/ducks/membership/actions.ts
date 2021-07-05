import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';
import {
  MemberShipListRequest,
  MemberShipListResponse,
  MemberShipCreateRequest,
  MemberShipCreateResponse,
  MembershipUpdateRequest,
  MembershipUpdateResponse,
  MembershiDetailRequest,
  MembershipDetailResponse,
  MembershiDeleteRequest,
  MembershipDeleteResponse,
  MembershipHistoryRequest,
  MembershipHistoryResponse
} from '../../api-models/membership';


// Create the set of async actions
export const getMembershipList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<MemberShipListRequest, MemberShipListResponse, any>();

// Create the set of async actions
export const createMembership = createAsyncAction(
  types.CREATE,
  types.CREATE_SUCCESS,
  types.CREATE_FAILED
)<MemberShipCreateRequest, MemberShipCreateResponse, any>();

// Create the set of async actions
export const updateMembership = createAsyncAction(
  types.UPDATE,
  types.UPDATE_SUCCESS,
  types.UPDATE_FAILED
)<MembershipUpdateRequest, MembershipUpdateResponse, any>();

// Create the set of async actions
export const detailMembership = createAsyncAction(
  types.DETAIL,
  types.DETAIL_SUCCESS,
  types.DETAIL_FAILED
)<MembershiDetailRequest, MembershipDetailResponse, any>();

// Create the set of async actions
export const deleteMembership = createAsyncAction(
  types.DELETE,
  types.DELETE_SUCCESS,
  types.DELETE_FAILED
)<MembershiDeleteRequest, MembershipDeleteResponse, any>();

// Create the set of async actions
export const historyMembership = createAsyncAction(
  types.HISTORY,
  types.HISTORY_SUCCESS,
  types.HISTORY_FAILED
)<MembershipHistoryRequest, MembershipHistoryResponse, any>();