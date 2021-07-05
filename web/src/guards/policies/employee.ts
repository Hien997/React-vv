import { Module } from '../module';
import { getDefaultPoliciesWithAllowed } from '../util';

export const EmployeePolicy = getDefaultPoliciesWithAllowed([
  {
    value: Module.Employee,
    is_readable: true,
    is_writable: false,
    can_set_writable: false,
    can_set_readable: true,
  },
]);
