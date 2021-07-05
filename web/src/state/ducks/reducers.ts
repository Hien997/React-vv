import { combineReducers } from 'redux';
import employeeReducers from './employee/reducers';
import serviceReducers from './service/reducers';

import customerReduers from './customer/reducers';
import customersGroupReduers from './customersGroup/reducers';
import membershipReducers from './membership/reducers';
import supplierReducers from './supplier/reducers';
import storeReducers from './store/reducers';
import giftcardReducers from './giftcard/reducers';

import codeReducers from './common/code/reducers';

// export { default as session } from './session';

export const rootReducers = combineReducers({
  employee: employeeReducers,
  service: serviceReducers,
  customer: customerReduers,
  customersGroup: customersGroupReduers,
  membership: membershipReducers,
  supplier: supplierReducers,
  store: storeReducers,
  giftcard: giftcardReducers,
  'common/code': codeReducers,

  // session,
});
