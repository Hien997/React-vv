import qs from 'qs';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../../config/api-endpoints/supplier';
import { axiosInstance } from '../../../utils/axios-instance';
import * as actions from './actions';
import { getSupplierPagination } from './selectors';

// Handle request saga
function* getSupplierList(
  action: ReturnType<typeof actions.getSupplierList.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.SUPPLIER.List,
      {
        params: action.payload,
        paramsSerializer: (params) => qs.stringify(params),
      }
    );

    yield put(actions.getSupplierList.success((response as any).data));
  } catch (err) {
    yield put(actions.getSupplierList.failure(err));
  }
}

function* getSupplierDetails(
  action: ReturnType<typeof actions.getSupplierDetails.request>
): Generator {
  try {
    let response: any = {};
    if (action.payload)
      response = yield call(
        axiosInstance.get,
        API_ENDPOINTS.SUPPLIER.Details.replace('{id}', `${action.payload}`)
      );

    yield put(actions.getSupplierDetails.success((response as any).data));
  } catch (err) {
    yield put(actions.getSupplierDetails.failure(err));
  }
}

function* createSupplier(
  action: ReturnType<typeof actions.createSupplier.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.post,
      API_ENDPOINTS.SUPPLIER.Create,
      action.payload
    );

    yield put(actions.createSupplier.success((response as any).data));
    const pagination = yield select(getSupplierPagination);
    yield put(actions.getSupplierList.request({ ...(pagination as any) }));
  } catch (err) {
    yield put(actions.createSupplier.failure(err));
  }
}

function* updateSupplier(
  action: ReturnType<typeof actions.updateSupplier.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.put,
      API_ENDPOINTS.SUPPLIER.Update.replace('{id}', `${action.payload.id}`),
      action.payload
    );

    yield put(actions.updateSupplier.success((response as any).data));
    const pagination = yield select(getSupplierPagination);
    yield put(actions.getSupplierList.request({ ...(pagination as any) }));
  } catch (err) {
    yield put(actions.updateSupplier.failure(err));
  }
}

function* deleteSupplier(
  action: ReturnType<typeof actions.deleteSupplier.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.delete,
      API_ENDPOINTS.SUPPLIER.Delete.replace('{id}', `${action.payload}`)
    );

    yield put(actions.deleteSupplier.success((response as any).data));
    const pagination = yield select(getSupplierPagination);
    yield put(actions.getSupplierList.request({ ...(pagination as any) }));
  } catch (err) {
    yield put(actions.deleteSupplier.failure(err));
  }
}

// Main saga
export default function* supplierSaga() {
  yield all([
    takeLatest(actions.getSupplierList.request, getSupplierList),
    takeLatest(actions.getSupplierDetails.request, getSupplierDetails),
    takeLatest(actions.createSupplier.request, createSupplier),
    takeLatest(actions.updateSupplier.request, updateSupplier),
    takeLatest(actions.deleteSupplier.request, deleteSupplier),
  ]);
}
