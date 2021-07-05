import { put, call, all, takeLatest } from 'redux-saga/effects';
import { axiosInstance } from '../../../utils/axios-instance';
import * as actions from './actions';
import { API_ENDPOINTS } from '../../../config/api-endpoints/service';

// Handle request saga
function* getServiceList(
  action: ReturnType<typeof actions.getServiceList.request>
): Generator {
  try {
    const response = yield call(axiosInstance.get, API_ENDPOINTS.SERVICE.List, {
      params: action.payload,
      paramsSerializer: (params: any) => JSON.stringify(params),
    });

    yield put(actions.getServiceList.success((response as any).data));
  } catch (err) {
    yield put(actions.getServiceList.failure(err));
  }
}

function* getServiceDetails(
  action: ReturnType<typeof actions.getServiceDetails.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.SERVICE.Details.replace('{id}', action.payload)
    );

    yield put(actions.getServiceDetails.success((response as any).data));
  } catch (err) {
    yield put(actions.getServiceDetails.failure(err));
  }
}

function* createService(
  action: ReturnType<typeof actions.createService.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.post(API_ENDPOINTS.SERVICE.Create, action.payload)
    );

    yield put(actions.createService.success((response as any).data));
  } catch (err) {
    yield put(actions.createService.failure(err));
  }
}

function* updateService(
  action: ReturnType<typeof actions.updateService.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.put(
        API_ENDPOINTS.SERVICE.Update.replace(
          '{id}',
          action.payload.id ? action.payload.id : ''
        ),
        action.payload
      )
    );

    yield put(actions.updateService.success((response as any).data));
  } catch (err) {
    yield put(actions.updateService.failure(err));
  }
}

function* deleteService(
  action: ReturnType<typeof actions.deleteService.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.delete(
        API_ENDPOINTS.SERVICE.Delete.replace('{id}', action.payload)
      )
    );

    yield put(actions.deleteService.success((response as any).data));
  } catch (err) {
    yield put(actions.deleteService.failure(err));
  }
}

function* importService(
  action: ReturnType<typeof actions.importService.request>
): Generator {
  try {
    const { file } = action.payload;

    const data = new FormData();
    data.set('fileName', file.name);
    data.append('file', file);

    const response = yield call(
      axiosInstance.post,
      API_ENDPOINTS.SERVICE.IMPORT,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    yield put(actions.importService.success((response as any).data));
  } catch (err) {
    yield put(actions.importService.failure(err));
  }
}

function* bulkService(
  action: ReturnType<typeof actions.bulkService.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.post,
      API_ENDPOINTS.SERVICE.Bulk,
      action.payload
    );

    yield put(actions.bulkService.success((response as any).data));
  } catch (err) {
    yield put(actions.bulkService.failure(err));
  }
}

// Main saga
export default function* serviceSaga() {
  yield all([
    takeLatest(actions.getServiceList.request, getServiceList),
    takeLatest(actions.getServiceDetails.request, getServiceDetails),
    takeLatest(actions.createService.request, createService),
    takeLatest(actions.updateService.request, updateService),
    takeLatest(actions.deleteService.request, deleteService),
    takeLatest(actions.importService.request, importService),
    takeLatest(actions.bulkService.request, bulkService),
  ]);
}
