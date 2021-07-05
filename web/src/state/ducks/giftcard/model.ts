import { BaseState } from '../models';
import {
  GiftcardListResponse,
  GiftcardDetailResponse,
  GiftcardDeleteResponse,
  GiftcardUpdateResponse,
  GiftcardCreateResponse,
  GiftcardBulkResponse,
} from '../../api-models/giftcard';

export type GiftcardDetails = BaseState<GiftcardDetailResponse>;
export type GiftcardList = BaseState<GiftcardListResponse>;
export type GiftcardCreate = BaseState<GiftcardCreateResponse>;
export type GiftcardUpdate = BaseState<GiftcardUpdateResponse>;
export type GiftcardDelete = BaseState<GiftcardDeleteResponse>;
export type GiftcardBulk = BaseState<GiftcardBulkResponse>;

export type GiftcardState = {
  list: GiftcardList;
  details: GiftcardDetails;
  create: GiftcardCreate;
  update: GiftcardUpdate;
  delete: GiftcardDelete;
  bulk: GiftcardBulk;
};

export const initialGiftcardState = {
  list: { loading: false, response: undefined },
  details: { loading: false, response: undefined },
  create: { loading: false, response: undefined },
  update: { loading: false, response: undefined },
  delete: { loading: false, response: undefined },
  bulk: { loading: false, response: undefined },
};

declare module './../models' {
  interface StateAll {
    // match to a duck folder
    giftcard: {
      // match to reducer name, each reducer will be one field in state
      giftcard: GiftcardState;
    };
  }
}
