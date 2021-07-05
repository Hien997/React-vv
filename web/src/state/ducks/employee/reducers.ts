import produce, { Draft } from 'immer';
import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { EmployeeState, initialEmployeeState } from './model';

const employee = produce(
  (draft: Draft<EmployeeState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getEmployeeList.request): {
        draft.list.loading = true;
        return draft;
      }
      case getType(actions.getEmployeeList.success): {
        draft.list.loading = true;
        draft.list.response = action.payload;
        return draft;
      }
      case getType(actions.getEmployeeList.failure): {
        draft.list.loading = false;
        draft.list.errors = action.payload;
        return draft;
      }
      case getType(actions.getEmployeeDetails.request): {
        draft.details.loading = true;
        draft.details.response = undefined;
        draft.details.errors = undefined;
        return draft;
      }
      case getType(actions.getEmployeeDetails.success): {
        draft.details.loading = true;
        draft.details.response = action.payload;

        return draft;
      }
      case getType(actions.getEmployeeDetails.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case getType(actions.createEmployee.request): {
        draft.details.loading = true;
        return draft;
      }
      case getType(actions.createEmployee.success): {
        draft.create.loading = false;
        draft.create.response = action.payload;
        return draft;
      }
      case getType(actions.createEmployee.failure): {
        draft.create.loading = false;
        draft.create.errors = action.payload;
        return draft;
      }
      case getType(actions.updateEmployee.request): {
        draft.update.loading = true;
        return draft;
      }
      case getType(actions.updateEmployee.success): {
        draft.update.loading = false;
        draft.update.response = action.payload;
        return draft;
      }
      case getType(actions.updateEmployee.failure): {
        draft.update.loading = false;
        draft.update.errors = action.payload;
        return draft;
      }
      case getType(actions.deleteEmployee.request): {
        draft.delete.loading = true;
        return draft;
      }
      case getType(actions.deleteEmployee.success): {
        draft.delete.loading = false;
        draft.delete.response = action.payload;
        return draft;
      }
      case getType(actions.deleteEmployee.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case getType(actions.bulkEmployees.request): {
        draft.bulk.loading = true;
        return draft;
      }
      case getType(actions.bulkEmployees.success): {
        draft.bulk.loading = false;
        draft.bulk.response = action.payload;
        return draft;
      }
      case getType(actions.bulkEmployees.failure): {
        draft.bulk.loading = false;
        draft.bulk.errors = action.payload;
        return draft;
      }
      case getType(actions.importEmployee.success): {
        draft.import.loading = false;
        draft.import.response = action.payload;
        return draft;
      }
      case getType(actions.importEmployee.failure): {
        draft.import.loading = false;
        draft.import.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialEmployeeState
);

export default combineReducers({
  employee,
});
