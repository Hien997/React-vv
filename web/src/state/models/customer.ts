import { Filter, Sort, PaginationRequest } from "../api-models/common";

export type Customer = {
  id: string;
  full_name: string;
  safety_box: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  homephone: string;
  cellphone: string;
  last_visit_date: string;
  birthday: string;
  anniversary: string;
  avatar_image?: any;
  email: string;
  membership_number: string;
  point_balance: string;
  point?: string;
  favorite: string;
  group_id: string;
  note: string;
  providePhone: string,
  customers_histories_points?: [];
  customers_reviews?: []
};

export type InputSearchCustomer = {
  filter?: Filter;
  sort?: Sort;
  pagination?: PaginationRequest;

};

export type InputSearchCustomerDetail = {
  id: string;
  sort?: Sort;
  pagination?: PaginationRequest;
};


export type CustomerDisplay = Customer & {
  groupName: string;
};

export type CustomersGroup = {
  id: string;
  group_name: string;
  parent_id: string;
};

export type CustomersHistoryPoint = {
  customer_id: string;
  func: string;
  item_id: string;
  action: number;
  point: number;
};

export type CustomersReviews = {
  customer_id: string;
  order_id: string;
  store_id: string;
  rating: number;
  comment: number;
  submited_date: string;
};

export const initCustomer: Customer = {
  id: '',
  full_name: '',
  safety_box: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  homephone: '',
  cellphone: '',
  last_visit_date: '',
  birthday: '',
  anniversary: '',
  email: '',
  membership_number: '',
  point_balance: '',
  favorite: '',
  group_id: '',
  note: '',
  providePhone: '',
};

export const initCustomersGroup: CustomersGroup = {
  id: '',
  group_name: '',
  parent_id: ''
};

export const initCustomerDisplay: CustomerDisplay = {
  id: '',
  full_name: '',
  safety_box: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  homephone: '',
  cellphone: '',
  last_visit_date: '',
  birthday: '',
  anniversary: '',
  email: '',
  membership_number: '',
  point_balance: '',
  favorite: '',
  group_id: '',
  note: '',
  providePhone: '',
  groupName: '',
};



