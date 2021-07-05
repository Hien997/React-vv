import { getDefaultPoliciesWithAllowed } from '../util';
import { Module } from '../module';

export const CashierPolicy = getDefaultPoliciesWithAllowed([
  {
    value: Module.Sale,
    is_readable: true,
    is_writable: true,
    can_set_writable: true,
    can_set_readable: true,
  },
  {
    value: Module.Product,
    is_readable: true,
    is_writable: false,
    can_set_writable: true,
    can_set_readable: true,
  },
  {
    value: Module.Package,
    is_readable: true,
    is_writable: false,
    can_set_writable: true,
    can_set_readable: true,
  },
  {
    value: Module.Service,
    is_readable: true,
    is_writable: false,
    can_set_writable: true,
    can_set_readable: true,
  },
  {
    value: Module.GiftCard,
    is_readable: true,
    is_writable: true,
    can_set_writable: true,
    can_set_readable: true,
  },
]);
