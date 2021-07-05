import produce, { Draft } from 'immer';
import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import {
  SupplierState,
  initialSupplierState,
} from './model';

const supplier = produce(
  (draft: Draft<SupplierState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getSupplierList.request): {
        draft.list.loading = true;
        return draft;
      }
      case getType(actions.getSupplierList.success): {
        draft.list.loading = true;
        draft.list.response = action.payload;
        return draft;
      }
      case getType(actions.getSupplierList.failure): {
        draft.list.loading = false;
        draft.list.errors = action.payload;
        return draft;
      }
      case getType(actions.getSupplierDetails.request): {
        draft.details.loading = true;
        draft.details.response = undefined;
        draft.details.errors = undefined;
        return draft;
      }
      case getType(actions.getSupplierDetails.success): {
        draft.details.loading = true;
        draft.details.response = action.payload;
        return draft;
      }
      case getType(actions.getSupplierDetails.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case getType(actions.createSupplier.request): {
        draft.details.loading = true;
        return draft;
      }
      case getType(actions.createSupplier.success): {
        draft.create.loading = false;
        draft.create.response = action.payload;
        return draft;
      }
      case getType(actions.createSupplier.failure): {
        draft.create.loading = false;
        draft.create.errors = action.payload;
        return draft;
      }
      case getType(actions.updateSupplier.request): {
        draft.update.loading = true;
        return draft;
      }
      case getType(actions.updateSupplier.success): {
        draft.update.loading = false;
        draft.update.response = action.payload;
        return draft;
      }
      case getType(actions.updateSupplier.failure): {
        draft.update.loading = false;
        draft.update.errors = action.payload;
        return draft;
      }
      case getType(actions.deleteSupplier.request): {
        draft.delete.loading = true;
        return draft;
      }
      case getType(actions.deleteSupplier.success): {
        draft.delete.loading = false;
        draft.delete.response = action.payload;
        return draft;
      }
      case getType(actions.deleteSupplier.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialSupplierState
);

export default combineReducers({
  supplier,
});
