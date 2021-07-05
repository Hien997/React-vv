import { put, call, all, takeLatest } from 'redux-saga/effects';
import { axiosInstance } from '../../../utils/axios-instance';
import * as actions from './actions';
import { API_ENDPOINTS } from '../../../config/api-endpoints/customer';

// Handle request saga
function* getCustomerList(
  action: ReturnType<typeof actions.getCustomerList.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CUSTOMER.List,
      {
        params: action.payload,
        paramsSerializer: (params: any) => JSON.stringify(params),
      }
    );

    yield put(actions.getCustomerList.success((response as any).data));
  } catch (err) {
    yield put(actions.getCustomerList.failure(err));
  }
}

function* getCustomerDetails(
  action: ReturnType<typeof actions.getCustomerDetails.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CUSTOMER.Details.replace(
        '{id}',
        (action.payload as any).id
      ),
      {
        params: action.payload,
        paramsSerializer: (params: any) => JSON.stringify(params),
      }
    );

    yield put(actions.getCustomerDetails.success((response as any).data));
  } catch (err) {
    yield put(actions.getCustomerDetails.failure(err));
  }
}

function* createCustomer(
  action: ReturnType<typeof actions.createCustomer.request>
): Generator {
  try {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const response = yield call(() =>
      axiosInstance.post(API_ENDPOINTS.CUSTOMER.Create, action.payload, config)
    );

    yield put(actions.createCustomer.success((response as any).data));
  } catch (err) {
    yield put(actions.createCustomer.failure(err));
  }
}

function* updateCustomer(
  action: ReturnType<typeof actions.updateCustomer.request>
): Generator {
  try {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const id = action.payload.get('id').toString();
    const response = yield call(() =>
      axiosInstance.post(
        API_ENDPOINTS.CUSTOMER.Update.replace('{id}', id),
        action.payload,
        config
      )
    );

    yield put(actions.updateCustomer.success((response as any).data));
  } catch (err) {
    yield put(actions.updateCustomer.failure(err));
  }
}

function* deleteCustomer(
  action: ReturnType<typeof actions.deleteCustomer.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.delete(
        API_ENDPOINTS.CUSTOMER.Delete.replace('{id}', action.payload)
      )
    );

    yield put(actions.deleteCustomer.success((response as any).data));
  } catch (err) {
    yield put(actions.deleteCustomer.failure(err));
  }
}

function* bulkCustomer(
  action: ReturnType<typeof actions.bulkCustomer.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.post(
        API_ENDPOINTS.CUSTOMER.Bulk,
        action.payload,
      )
    );

    yield put(actions.bulkCustomer.success((response as any).data));
  } catch (err) {
    yield put(actions.bulkCustomer.failure(err));
  }
}

function* importCustomer(
  action: ReturnType<typeof actions.importCustomer.request>
): Generator {
  try {
    const data = action.payload.formdata ? action.payload.formdata : action.payload;
    const config = { headers: { 'Content-Type': "multipart/form-data" } };
    const response = yield call(() =>
      axiosInstance.post(
        API_ENDPOINTS.CUSTOMER.Import,
        data,
        config
      )
    );

    yield put(actions.importCustomer.success((response as any).data));
  } catch (err) {
    yield put(actions.importCustomer.failure(err));
  }
}

function* getHistoryPointSaga(
  action: ReturnType<typeof actions.historyPointAction.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CUSTOMER.listHistoryPoint,
      {
        params: action.payload,
        paramsSerializer: (params: any) => JSON.stringify(params),
      }
    );
    yield put(actions.historyPointAction.success((response as any).data));
  } catch (err) {
    yield put(actions.historyPointAction.failure(err));
  }
}

function* getReviewsSaga(
  action: ReturnType<typeof actions.reviewsAction.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CUSTOMER.listReviews,
      {
        params: action.payload,
        paramsSerializer: (params: any) => JSON.stringify(params),
      }
    );

    yield put(actions.reviewsAction.success((response as any).data));
  } catch (err) {
    yield put(actions.reviewsAction.failure(err));
  }
}

// Main saga
export default function* CustomerSaga() {
  yield all([
    takeLatest(actions.getCustomerList.request, getCustomerList),
    takeLatest(actions.getCustomerDetails.request, getCustomerDetails),
    takeLatest(actions.createCustomer.request, createCustomer),
    takeLatest(actions.updateCustomer.request, updateCustomer),
    takeLatest(actions.deleteCustomer.request, deleteCustomer),
    takeLatest(actions.bulkCustomer.request, bulkCustomer),
    takeLatest(actions.importCustomer.request, importCustomer),
    takeLatest(actions.historyPointAction.request, getHistoryPointSaga),
    takeLatest(actions.reviewsAction.request, getReviewsSaga),
  ]);
}
