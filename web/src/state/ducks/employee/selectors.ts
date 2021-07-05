import { createSelector } from 'reselect';
import { StateAll } from '../models';
import { EmployeeState, initialEmployeeState } from './model';

type ApiType = 'list|details|create|update|import|delete|bulk';

const rootSelector = (state: StateAll) =>
  state.employee.employee || initialEmployeeState;

export const getEmployeeList = createSelector(
  rootSelector,
  (employeeState: EmployeeState) => {
    return employeeState.list
      ? employeeState.list.response
      : initialEmployeeState.list.response;
  }
);

export const getEmployeeDetails = createSelector(
  rootSelector,
  (employeeState: EmployeeState) => {
    return employeeState.details.response;
  }
);

export const getEmployeeImport = createSelector(
  rootSelector,
  (employeeState: EmployeeState) => {
    return employeeState.import.response;
  }
);

export const isImportLoading = createSelector(
  rootSelector,
  (employeeState: EmployeeState) => {
    return employeeState.import.loading;
  }
);

export const getEmployeeUpdate = createSelector(
  rootSelector,
  (employeeState: EmployeeState) => {
    return employeeState.update.response;
  }
);

export const getEmployeeCreate = createSelector(
  rootSelector,
  (employeeState: EmployeeState) => {
    return employeeState.create.response;
  }
);

export const getEmployeeDelete = createSelector(
  rootSelector,
  (employeeState: EmployeeState) => {
    return employeeState.delete.response;
  }
);

export const getEmployeeBulk = createSelector(
  rootSelector,
  (employeeState: EmployeeState) => {
    return employeeState.bulk.response;
  }
);
