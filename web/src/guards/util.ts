import { Modules } from 'src/config/code/module';
import { Policy } from './type';

export const getDenyAll = () => {
  return Modules.map((item) => {
    return {
      ...item,
      is_readable: false,
      is_writable: false,
      can_set_readable: false,
      can_set_writable: false,
    };
  });
};

export const getAllowAll = () => {
  return Modules.map((item) => {
    return {
      ...item,
      is_readable: true,
      is_writable: true,
      can_set_readable: true,
      can_set_writable: true,
    };
  });
};

export const getDefaultPoliciesWithAllowed = (allowedPolicies: Policy[]) => {
  const denyAll = getDenyAll();
  return denyAll.map((item) => {
    const allowItem = allowedPolicies.find(
      (policy) => policy.value === item.value
    );
    if (allowItem) return { ...item, ...allowItem };
    return { ...item };
  });
};

export const getDefaultPoliciesWithDenied = (deniedPolicies: Policy[]) => {
  const allowAll = getAllowAll();
  return allowAll.map((item) => {
    const denyItem = deniedPolicies.find(
      (policy) => policy.value === item.value
    );
    if (denyItem) return { ...item, ...denyItem };
    return { ...item };
  });
};
