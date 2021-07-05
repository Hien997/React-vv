import produce, { Draft } from 'immer';
import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { initialServiceState, ServiceState } from './model';

const service = produce(
  (draft: Draft<ServiceState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getServiceList.request): {
        draft.list.loading = true;
        return draft;
      }
      case getType(actions.getServiceList.success): {
        draft.list.loading = true;
        draft.list.response = action.payload;
        return draft;
      }
      case getType(actions.getServiceList.failure): {
        draft.list.loading = false;
        draft.list.errors = action.payload;
        return draft;
      }
      case getType(actions.getServiceDetails.request): {
        draft.details.loading = true;
        draft.details.response = undefined;
        draft.details.errors = undefined;
        return draft;
      }
      case getType(actions.getServiceDetails.success): {
        draft.details.loading = true;
        draft.details.response = action.payload;

        return draft;
      }
      case getType(actions.getServiceDetails.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case getType(actions.importService.request): {
        draft.import.loading = true;
        draft.import.response = undefined;
        draft.import.errors = undefined;
        return draft;
      }
      case getType(actions.importService.success): {
        draft.import.loading = true;
        draft.import.response = action.payload;
        return draft;
      }
      case getType(actions.importService.failure): {
        draft.import.loading = false;
        draft.import.errors = action.payload;
        return draft;
      }
      case getType(actions.createService.request): {
        draft.create.loading = true;
        return draft;
      }
      case getType(actions.createService.success): {
        draft.create.loading = false;
        draft.create.response = action.payload;
        return draft;
      }
      case getType(actions.createService.failure): {
        draft.create.loading = false;
        draft.create.errors = action.payload;
        return draft;
      }
      case getType(actions.updateService.request): {
        draft.update.loading = true;
        return draft;
      }
      case getType(actions.updateService.success): {
        draft.update.loading = false;
        draft.update.response = action.payload;
        return draft;
      }
      case getType(actions.updateService.failure): {
        draft.update.loading = false;
        draft.update.errors = action.payload;
        return draft;
      }
      case getType(actions.deleteService.request): {
        draft.delete.loading = true;
        return draft;
      }
      case getType(actions.deleteService.success): {
        draft.delete.loading = false;
        draft.delete.response = action.payload;
        return draft;
      }
      case getType(actions.deleteService.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case getType(actions.bulkService.request): {
        draft.bulk.loading = true;
        return draft;
      }
      case getType(actions.bulkService.success): {
        draft.bulk.loading = false;
        draft.bulk.response = action.payload;
        return draft;
      }
      case getType(actions.bulkService.failure): {
        draft.bulk.loading = false;
        draft.bulk.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialServiceState
);

export default combineReducers({
  service,
});
