import { AdminPolicy } from './policies/admin';
import { CashierPolicy } from './policies/cashier';
import { OnwerPolicy } from './policies/owner';
import { StoreManagerPolicy } from './policies/store-manager';
import { EmployeePolicy } from './policies/employee';
import { RoleCode } from './role';
import { PoliciesObject, Policy, Role } from './type';
import { getDenyAll } from './util';

export const getDefaultPolicies = (role: Role | string): Policy[] => {
  switch (String(role)) {
    case 'Admin':
    case RoleCode.Admin:
      return AdminPolicy;
    case 'Owner':
    case RoleCode.Owner:
      return OnwerPolicy;
    case 'StoreManager':
    case RoleCode.StoreManager:
      return StoreManagerPolicy;
    case 'Cashier':
    case RoleCode.Cashier:
      return CashierPolicy;
    case 'Employee':
    case RoleCode.Employee:
      return EmployeePolicy;
    default:
      return getDenyAll();
  }
};

export const getDefaultPoliciesInObject = (role: Role | string) => {
  const policies = getDefaultPolicies(role);
  return convertPoliciesToObject(policies);
};

export const convertPoliciesToArray = (policies: PoliciesObject) => {
  const arr = [];
  for (const key in policies) {
    if (Object.prototype.hasOwnProperty.call(policies, key)) {
      arr.push(policies[key]);
    }
  }

  return arr;
};

export const convertPoliciesToObject = (policies: Policy[]) => {
  const obj = {};
  for (const policy of policies) {
    obj[policy.value] = policy;
  }

  return obj;
};

export const mergePolicies = (
  defaultPolicies: Policy[],
  settingPolicies: Policy[]
) => {
  const merged = [];
  for (const policy of defaultPolicies) {
    const setting = settingPolicies.find(
      (p) => String(p.value) === String(policy.value)
    );
    merged.push({ ...policy, ...setting });
  }
  return merged;
};
