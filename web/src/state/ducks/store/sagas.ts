import { all, call, put, takeLatest } from 'redux-saga/effects';
import { API_ENDPOINTS } from 'src/config/api-endpoints/store';
import { axiosInstance } from '../../../utils/axios-instance';
import * as actions from './actions';

// Handle request saga
function* getStoreList(
  action: ReturnType<typeof actions.getStoreList.request>
): Generator {
  try {
    const response = yield call(axiosInstance.get, API_ENDPOINTS.STORE.List, {
      params: action.payload,
      paramsSerializer: (params: any) => JSON.stringify(params),
    });

    yield put(actions.getStoreList.success((response as any).data));
  } catch (err) {
    yield put(actions.getStoreList.failure(err));
  }
}

// Main saga
export default function* supplierSaga() {
  yield all([takeLatest(actions.getStoreList.request, getStoreList)]);
}
