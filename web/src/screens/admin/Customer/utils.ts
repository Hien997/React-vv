import { axiosInstance } from '../../../utils/axios-instance';

export const API_URL = axiosInstance.defaults.baseURL;

export const cloneObject = (a: any, b: any) => {
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    for (let prop in a) {
      if (a.hasOwnProperty(prop) && a.hasOwnProperty(prop)) {
        // if the value is a nested object, recursively copy all it's properties
        if (isObject(a[prop])) {
          b[prop] = cloneObject(a[prop], b[prop]);
        } else {
          b[prop] = a[prop];
        }
      }
    }
    const c = { ...b };
    return c;
  }
  const c = { ...b };
  return c;
};

export const isObject = (obj: any) => {
  var type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
};

export const checkUndefined = (name: any) => {
  if (name) {
    return name;
  }
  return undefined;
};

export function getImageUrl(category, id) {
  const url = `${API_URL}/${category}/avatar/${id}`;
  return url;
}
