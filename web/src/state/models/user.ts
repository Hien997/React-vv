export type User = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  password: string;
  fa2_status?: boolean;
  remember_token: string;
  avatar: string;
  cart: string;
  newsletter: string;
  ip: string;
  role_id?: number;
  published: string;
  flg_change_pwd?: boolean;
  country_code: string;
};

export const initUser = {
  id: '',
  full_name: '',
  email: '',
  phone: '',
  password: '',
  fa2_status: false,
  remember_token: '',
  avatar: '',
  cart: '',
  newsletter: '',
  ip: '',
  // role_id: '',
  status: '',
  flg_change_pwd: false,
  country_code: '',
};
