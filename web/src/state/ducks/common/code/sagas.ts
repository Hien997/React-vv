import { all, call, put, takeEvery } from 'redux-saga/effects';
import { API_ENDPOINTS } from 'src/config/api-endpoints/code';
import { axiosInstance } from '../../../../utils/axios-instance';
import * as actions from './actions';

// Handle request saga
function* getCodeList(
  action: ReturnType<typeof actions.getCodeList.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      `${API_ENDPOINTS.CODE.List}?codeName=${action.payload.codeName}`,
      {
        params: action.payload,
        paramsSerializer: (params: any) => JSON.stringify(params),
      }
    );

    const responseData = (response as any).data;

    yield put(
      actions.getCodeList.success({
        responseData,
        codeName: action.payload.codeName,
      })
    );
  } catch (err) {
    yield put(
      actions.getCodeList.failure({
        errors: err,
        codeName: action.payload.codeName,
      })
    );
  }
}

// Main saga
export default function* codeSaga() {
  yield all([takeEvery(actions.getCodeList.request, getCodeList)]);
}
