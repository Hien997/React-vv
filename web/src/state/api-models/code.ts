import { CommonResponse, SearchRequest } from './common';
import { Store } from '../models/store';

export type CodeItem = {
  value: string;
  label: string;
  children?: CodeItem[];
};

export type CodeColumns = {
  value: string;
  label: string;
};

export type CodeConditions = {
  column: string;
  operator: string;
  value: string;
  boolean: string;
};

export type CodeName =
  | 'stores'
  | 'users'
  | 'roles'
  | 'modules'
  | 'customers'
  | 'customer_groups'
  | 'suppliers'
  | 'categories'
  | 'products'
  | 'productkits'
  | 'order_statuses'
  | 'services'
  | 'countries'
  | 'zones'
  | 'tax_classes'
  | 'tax_classes';

export type CodeListRequest =
  | (SearchRequest & {
      codeName: CodeName;
      columns?: CodeColumns;
      conditions?: CodeConditions;
    })
  | undefined;
export type CodeListResponse = CommonResponse & {
  codeName: CodeName;
  data: CodeItem[];
};

export type CodeItemRequest =
  | (SearchRequest & {
      codeName: CodeName;
      id: string;
      columns?: CodeColumns;
      conditions?: CodeConditions;
    })
  | undefined;
export type CodeItemResponse = CommonResponse & {
  codeName: CodeName;
  data: CodeItem;
};
