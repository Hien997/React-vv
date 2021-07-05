import { put, call, all, takeLatest } from 'redux-saga/effects';
import { axiosInstance } from '../../../utils/axios-instance';
import * as actions from './actions';
import { API_ENDPOINTS } from '../../../config/api-endpoints/giftcard';

// Handle request saga
function* getGiftcardList(
  action: ReturnType<typeof actions.getGiftcardList.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.GIFTCARD.List,
      {
        params: action.payload,
        paramsSerializer: (params: any) => JSON.stringify(params),
      }
    );

    yield put(actions.getGiftcardList.success((response as any).data));
  } catch (err) {
    yield put(actions.getGiftcardList.failure(err));
  }
}

function* getGiftcardDetails(
  action: ReturnType<typeof actions.getGiftcardDetails.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.GIFTCARD.Details.replace('{id}', action.payload)
    );

    yield put(actions.getGiftcardDetails.success((response as any).data));
  } catch (err) {
    yield put(actions.getGiftcardDetails.failure(err));
  }
}

function* createGiftcard(
  action: ReturnType<typeof actions.createGiftcard.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.post(API_ENDPOINTS.GIFTCARD.Create, action.payload)
    );

    yield put(actions.createGiftcard.success((response as any).data));
  } catch (err) {
    yield put(actions.createGiftcard.failure(err));
  }
}

function* updateGiftcard(
  action: ReturnType<typeof actions.updateGiftcard.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.put(
        API_ENDPOINTS.GIFTCARD.Update.replace('{id}', action.payload.id),
        action.payload
      )
    );

    yield put(actions.updateGiftcard.success((response as any).data));
  } catch (err) {
    yield put(actions.updateGiftcard.failure(err));
  }
}

function* deleteGiftcard(
  action: ReturnType<typeof actions.deleteGiftcard.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.delete(
        API_ENDPOINTS.GIFTCARD.Delete.replace('{id}', action.payload)
      )
    );

    yield put(actions.deleteGiftcard.success((response as any).data));
  } catch (err) {
    yield put(actions.deleteGiftcard.failure(err));
  }
}

function* bulkGiftcards(
  action: ReturnType<typeof actions.bulkGiftcards.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.post,
      API_ENDPOINTS.GIFTCARD.Bulk,
      action.payload
    );

    yield put(actions.bulkGiftcards.success((response as any).data));
  } catch (err) {
    yield put(actions.bulkGiftcards.failure(err));
  }
}

// Main saga
export default function* giftcardSaga() {
  yield all([
    takeLatest(actions.getGiftcardList.request, getGiftcardList),
    takeLatest(actions.getGiftcardDetails.request, getGiftcardDetails),
    takeLatest(actions.createGiftcard.request, createGiftcard),
    takeLatest(actions.updateGiftcard.request, updateGiftcard),
    takeLatest(actions.deleteGiftcard.request, deleteGiftcard),
    takeLatest(actions.bulkGiftcards.request, bulkGiftcards),
  ]);
}
