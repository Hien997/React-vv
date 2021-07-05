export type Role = 'Admin' | 'Owner' | 'StoreManager' | 'Cashier' | 'Employee';

export type Policy = {
  value: string;
  label?: string;
  key?: string;
  is_readable: boolean;
  is_writable: boolean;
  can_set_readable: boolean;
  can_set_writable: boolean;
};

export type PoliciesObject = {
  [value: string]: Policy;
};
