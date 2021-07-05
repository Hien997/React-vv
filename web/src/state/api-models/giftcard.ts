import { Pagination } from 'reactstrap';
import {
  CommonRequest,
  CommonResponse,
  SearchRequest,
  BulkRequest,
} from './common';
import { Giftcard, HistoryGiftcard } from '../models/giftcard';

export type GiftcardListRequest = (SearchRequest & {}) | undefined;
export type GiftcardListResponse = CommonResponse & {
  data?: {
    giftcards: Giftcard[];
    pagination: Pagination;
  };
};

export type GiftcardDetailRequest = CommonRequest & {};
export type GiftcardDetailResponse = CommonResponse & {
  data?: Giftcard;
};

export type GiftcardCreateRequest = CommonRequest & {};
export type GiftcardCreateResponse = CommonResponse & {
  data?: Giftcard;
};

export type GiftcardUpdateRequest = CommonRequest & {
  id: string;
  user_id: string;
  store_id: string;
  employee_name: string;
  giftcard_number: string;
  value: string;
  value_use: string;
  effective_start: string;
  effective_end: string;
  balance: string;
  published: string;
  giftcard_histories: HistoryGiftcard;
};
export type GiftcardUpdateResponse = CommonResponse & {
  data?: Giftcard;
};

export type GiftcardDeleteRequest = CommonRequest & { id: string };
export type GiftcardDeleteResponse = CommonResponse & {};

export type GiftcardBulkRequest = BulkRequest & {};
export type GiftcardBulkResponse = CommonResponse & {};
