import { fork, all } from 'redux-saga/effects';
import employeeSaga from './employee/sagas';
import serviceSaga from './service/sagas';
import customerSaga from './customer/sagas';
import customersGroupSaga from './customersGroup/sagas';
import membershipSaga from './membership/sagas';
import supplierSaga from './supplier/sagas';
import storeSaga from './store/sagas';
import giftcardSaga from './giftcard/sagas';
import codeSaga from './common/code/sagas';

// We `fork()` these tasks so they execute in the background.
export function* rootSagas() {
  yield all([
    fork(employeeSaga),
    fork(serviceSaga),
    fork(customerSaga),
    fork(customersGroupSaga),
    fork(membershipSaga),
    fork(supplierSaga),
    fork(storeSaga),
    fork(giftcardSaga),
    fork(codeSaga),
    // fork(teamsSaga),
    // `fork()` any other store sagas down here...
  ]);
}
