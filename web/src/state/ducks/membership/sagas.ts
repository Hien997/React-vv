import { put, call, all, takeLatest } from 'redux-saga/effects';
import { axiosInstance } from '../../../utils/axios-instance';
import * as actions from './actions';
import { API_ENDPOINTS } from '../../../config/api-endpoints/membership';

// Handle request saga
function* getMembershipList(
  action: ReturnType<typeof actions.getMembershipList.request>
): Generator {
  try {
    const response = yield call(axiosInstance.get, API_ENDPOINTS.List, {
      params: action.payload,
      paramsSerializer: (params: any) => JSON.stringify(params),
    });

    yield put(actions.getMembershipList.success((response as any).data));
  } catch (err) {
    yield put(actions.getMembershipList.failure(err));
  }
}

function* createMembership(
  action: ReturnType<typeof actions.createMembership.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.post(API_ENDPOINTS.Create, action.payload)
    );

    yield put(actions.createMembership.success((response as any).data));
  } catch (err) {
    yield put(actions.createMembership.failure(err));
  }
}

function* updateMembership(
  action: ReturnType<typeof actions.updateMembership.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.put(
        API_ENDPOINTS.Update.replace('{id}', action.payload.id),
        action.payload
      )
    );

    yield put(actions.updateMembership.success((response as any).data));
  } catch (err) {
    yield put(actions.updateMembership.failure(err));
  }
}

function* detailMembership(
  action: ReturnType<typeof actions.detailMembership.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.get(
        API_ENDPOINTS.Details.replace('{id}', action.payload.id)
      )
    );

    yield put(actions.detailMembership.success((response as any).data));
  } catch (err) {
    yield put(actions.detailMembership.failure(err));
  }
}

function* deleteMembership(
  action: ReturnType<typeof actions.deleteMembership.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.delete(
        API_ENDPOINTS.Delete.replace('{id}', action.payload.id)
      )
    );

    yield put(actions.deleteMembership.success((response as any).data));
  } catch (err) {
    yield put(actions.deleteMembership.failure(err));
  }
}

function* historyMembership(
  action: ReturnType<typeof actions.historyMembership.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.get(
        API_ENDPOINTS.History.replace('{id}', action.payload.id)
      )
    );

    yield put(actions.historyMembership.success((response as any).data));
  } catch (err) {
    yield put(actions.historyMembership.failure(err));
  }
}

// Main saga
export default function* membershipSaga() {
  yield all([
    takeLatest(actions.getMembershipList.request, getMembershipList),
    takeLatest(actions.createMembership.request, createMembership),
    takeLatest(actions.updateMembership.request, updateMembership),
    takeLatest(actions.detailMembership.request, detailMembership),
    takeLatest(actions.deleteMembership.request, deleteMembership),
    takeLatest(actions.historyMembership.request, historyMembership),
  ]);
}
