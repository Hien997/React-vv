import { CommonResponse, SearchRequest } from './common';
import { Store } from '../models/store';

export type StoreListRequest = (SearchRequest & {}) | undefined;
export type StoreListResponse = CommonResponse & {
  data: {
    list: Store[];
    pagination: {
      page: number;
      items_per_page: number;
      total_pages: number;
      total_items: number;
    };
  };
};
