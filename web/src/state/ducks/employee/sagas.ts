import { put, call, all, takeLatest } from 'redux-saga/effects';
import { axiosInstance } from '../../../utils/axios-instance';
import * as actions from './actions';
import { API_ENDPOINTS } from '../../../config/api-endpoints/user';

// Handle request saga
function* getEmployeeList(
  action: ReturnType<typeof actions.getEmployeeList.request>
): Generator {
  try {
    const response = yield call(axiosInstance.get, API_ENDPOINTS.USER.List, {
      params: action.payload,
      // paramsSerializer: (params: any) => JSON.stringify(params),
    });

    yield put(actions.getEmployeeList.success((response as any).data));
  } catch (err) {
    yield put(actions.getEmployeeList.failure(err));
  }
}

function* getEmployeeDetails(
  action: ReturnType<typeof actions.getEmployeeDetails.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.USER.Details.replace('{id}', action.payload)
    );

    yield put(actions.getEmployeeDetails.success((response as any).data));
  } catch (err) {
    yield put(actions.getEmployeeDetails.failure(err));
  }
}

function* createEmployee(
  action: ReturnType<typeof actions.createEmployee.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.post(API_ENDPOINTS.USER.Create, action.payload)
    );

    yield put(actions.createEmployee.success((response as any).data));
  } catch (err) {
    yield put(actions.createEmployee.failure(err));
  }
}

function* updateEmployee(
  action: ReturnType<typeof actions.updateEmployee.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.post(
        API_ENDPOINTS.USER.Update.replace('{id}', action.payload.id),
        action.payload
        // {
        //   transformRequest: (data) => {
        //     const transData = { ...data };
        //     transData.employee.contract_accepted = JSON.stringify(
        //       data.employee.contract_accepted
        //     );
        //     transData.employee.e_style = JSON.stringify(data.employee.e_style);
        //     return JSON.stringify(transData);
        //   },
        // }
      )
    );

    yield put(actions.updateEmployee.success((response as any).data));
  } catch (err) {
    yield put(actions.updateEmployee.failure(err));
  }
}

function* deleteEmployee(
  action: ReturnType<typeof actions.deleteEmployee.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.delete(
        API_ENDPOINTS.USER.Delete.replace('{id}', action.payload)
      )
    );

    yield put(actions.deleteEmployee.success((response as any).data));
  } catch (err) {
    yield put(actions.deleteEmployee.failure(err));
  }
}

function* bulkEmployees(
  action: ReturnType<typeof actions.bulkEmployees.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.post,
      API_ENDPOINTS.USER.Bulk,
      action.payload
    );

    yield put(actions.bulkEmployees.success((response as any).data));
  } catch (err) {
    yield put(actions.bulkEmployees.failure(err));
  }
}

function* importEmployee(
  action: ReturnType<typeof actions.importEmployee.request>
): Generator {
  try {
    const { file } = action.payload;

    const data = new FormData();
    data.set('fileName', file.name);
    data.append('file', file);

    const response = yield call(
      axiosInstance.post,
      API_ENDPOINTS.USER.Import,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    yield put(actions.importEmployee.success((response as any).data));
  } catch (err) {
    yield put(actions.importEmployee.failure(err));
  }
}

// Main saga
export default function* employeeSaga() {
  yield all([
    takeLatest(actions.getEmployeeList.request, getEmployeeList),
    takeLatest(actions.getEmployeeDetails.request, getEmployeeDetails),
    takeLatest(actions.createEmployee.request, createEmployee),
    takeLatest(actions.updateEmployee.request, updateEmployee),
    takeLatest(actions.deleteEmployee.request, deleteEmployee),
    takeLatest(actions.bulkEmployees.request, bulkEmployees),
    takeLatest(actions.importEmployee.request, importEmployee),
  ]);
}
