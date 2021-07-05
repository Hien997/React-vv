import { BaseState } from '../models';
import {
  MemberShipListResponse,
  MemberShipCreateResponse,
  MembershipUpdateResponse,
  MembershipDetailResponse,
  MembershipDeleteResponse,
  MembershipHistoryResponse
} from '../../api-models/membership';

export type MemberShipList = BaseState<MemberShipListResponse>;
export type MemberShipCreate = BaseState<MemberShipCreateResponse>;
export type MemberShipUpdate = BaseState<MembershipUpdateResponse>;
export type MembershipDetail = BaseState<MembershipDetailResponse>;
export type MembershipDelete = BaseState<MembershipDeleteResponse>;
export type MembershipHistory = BaseState<MembershipHistoryResponse>;

export type MemberShipState = {
  list: MemberShipList;
  create: MemberShipCreate;
  update: MemberShipUpdate;
  detail: MembershipDetail;
  delete: MembershipDelete;
  history: MembershipHistory;
};

export const initialMemberShipState = {
  list: { loading: false, response: undefined },
  create: { loading: false, response: undefined },
  update: { loading: false, response: undefined },
  detail: { loading: false, response: undefined },
  delete: { loading: false, response: undefined },
  history: { loading: false, response: undefined },
};

declare module './../models' {
  interface StateAll {
    // match to a duck folder
    membership: {
      // match to reducer name, each reducer will be one field in state
      membership: MemberShipState;
    };
  }
}
