import { Pagination } from 'reactstrap';
import {
  CommonRequest,
  CommonResponse,
  SearchRequest,
  BulkRequest,
} from './common';
import { Membership } from '../models/membership';

export type MemberShipListRequest = (SearchRequest & {}) | undefined;
export type MemberShipListResponse = CommonResponse & {
  data?: {
    memberships: Membership[];
    pagination: Pagination;
  };
};


export type MemberShipCreateRequest = CommonRequest & {
  store_id: string,
  m_code: string,
  amount: string,
  amount_type: string,
  effective_start: string,
  effective_end: string,
  published: number,
  calculation_point: boolean,
};

export type MemberShipCreateResponse = CommonResponse & {
  data?: Membership;
};

export type MembershipUpdateRequest = CommonRequest & {
  id: string,
  store_id: string,
  m_code: string,
  amount: string,
  amount_type: string,
  effective_start: string,
  effective_end: string,
  published: number,
  calculation_point: boolean,
};

export type MembershipUpdateResponse = CommonResponse & {
  data?: Membership;
};


export type MembershiDetailRequest = CommonRequest & {
  id: string,
};

export type MembershipDetailResponse = CommonResponse & {
  data?: Membership;
};


export type MembershiDeleteRequest = CommonRequest & {
  id: string,
};

export type MembershipDeleteResponse = CommonResponse & {
};

export type MembershipHistoryRequest = CommonRequest & {
  id: string,
};

export type MembershipHistory = {
  id: string;
  membership_id: string;
  employee: string;
  discount_origin: string;
  amount: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  order_id: string;
};

export type MembershipHistoryResponse = CommonResponse & {
  data: {
    histories: MembershipHistory[]
  }
  id: string;
};
