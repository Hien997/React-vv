import { put, call, all, takeLatest } from 'redux-saga/effects';
import { axiosInstance } from '../../../utils/axios-instance';
import * as actions from './actions';
import { API_ENDPOINTS } from '../../../config/api-endpoints/customersGroup';

// Handle request saga
function* getCustomersGroupList(
  action: ReturnType<typeof actions.getCustomersGroupList.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CUSTOMERGROUP.List,
      {
        params: action.payload,
        paramsSerializer: (params: any) => JSON.stringify(params),
      }
    );

    yield put(actions.getCustomersGroupList.success((response as any).data));
  } catch (err) {
    yield put(actions.getCustomersGroupList.failure(err));
  }
}

function* getCustomersGroupDetails(
  action: ReturnType<typeof actions.getCustomersGroupDetails.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CUSTOMERGROUP.Details.replace('{id}', action.payload)
    );

    yield put(actions.getCustomersGroupDetails.success((response as any).data));
  } catch (err) {
    yield put(actions.getCustomersGroupDetails.failure(err));
  }
}

function* createCustomersGroup(
  action: ReturnType<typeof actions.createCustomersGroup.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.post(API_ENDPOINTS.CUSTOMERGROUP.Create, action.payload)
    );

    yield put(actions.createCustomersGroup.success((response as any).data));
  } catch (err) {
    yield put(actions.createCustomersGroup.failure(err));
  }
}

function* updateCustomersGroup(
  action: ReturnType<typeof actions.updateCustomersGroup.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.put(API_ENDPOINTS.CUSTOMERGROUP.Update, action.payload)
    );

    yield put(actions.updateCustomersGroup.success((response as any).data));
  } catch (err) {
    yield put(actions.updateCustomersGroup.failure(err));
  }
}

function* deleteCustomersGroup(
  action: ReturnType<typeof actions.deleteCustomersGroup.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.delete(
        API_ENDPOINTS.CUSTOMERGROUP.Delete.replace('{id}', action.payload)
      )
    );

    yield put(actions.deleteCustomersGroup.success((response as any).data));
  } catch (err) {
    yield put(actions.deleteCustomersGroup.failure(err));
  }
}

function* bulkCustomersGroup(
  action: ReturnType<typeof actions.bulkCustomersGroup.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.post,
      API_ENDPOINTS.CUSTOMERGROUP.Bulk,
      action.payload
    );

    yield put(actions.bulkCustomersGroup.success((response as any).data));
  } catch (err) {
    yield put(actions.bulkCustomersGroup.failure(err));
  }
}

// Main saga
export default function* CustomersGroupSaga() {
  yield all([
    takeLatest(actions.getCustomersGroupList.request, getCustomersGroupList),
    takeLatest(
      actions.getCustomersGroupDetails.request,
      getCustomersGroupDetails
    ),
    takeLatest(actions.createCustomersGroup.request, createCustomersGroup),
    takeLatest(actions.updateCustomersGroup.request, updateCustomersGroup),
    takeLatest(actions.deleteCustomersGroup.request, deleteCustomersGroup),
    takeLatest(actions.bulkCustomersGroup.request, bulkCustomersGroup),
  ]);
}
