import produce, { Draft } from 'immer';
import { combineReducers } from 'redux';
import * as types from './types';
import { CustomersGroupState, initialCustomersGroupState } from './model';

const customersGroup = produce((draft: Draft<CustomersGroupState>, action) => {  
    switch (action.type) {
      case types.FETCH_LIST: {
        draft.list.loading = true;
        return draft;
      }
      case types.FETCH_LIST_SUCCESS: {
        draft.list.loading = true;
        draft.list.response = action.payload;
        return draft;
      }
      case types.FETCH_LIST_FAILED: {
        draft.list.loading = false;
        draft.list.errors = action.payload;
        return draft;
      }
      case types.FETCH_DETAILS: {
        draft.details.loading = true;
        draft.details.response = undefined;
        draft.details.errors = undefined;
        return draft;
      }
      case types.FETCH_DETAILS_SUCCESS: {
        draft.details.loading = true;
        draft.details.response = action.payload;

        return draft;
      }
      case types.FETCH_DETAILS_FAILED: {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case types.CREATE: {
        draft.details.loading = true;
        return draft;
      }
      case types.CREATE_SUCCESS: {
        draft.create.loading = false;
        draft.create.response = action.payload;
        return draft;
      }
      case types.CREATE_FAILED: {
        draft.create.loading = false;
        draft.create.errors = action.payload;
        return draft;
      }
      case types.UPDATE: {
        draft.update.loading = true;
        return draft;
      }
      case types.UPDATE_SUCCESS: {
        draft.update.loading = false;
        draft.update.response = action.payload;
        return draft;
      }
      case types.UPDATE_FAILED: {
        draft.update.loading = false;
        draft.update.errors = action.payload;
        return draft;
      }
      case types.DELETE: {
        draft.delete.loading = true;
        return draft;
      }
      case types.DELETE_SUCCESS: {
        draft.delete.loading = false;
        draft.delete.response = action.payload;
        return draft;
      }
      case types.DELETE_FAILED: {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case types.BULK: {
        draft.bulk.loading = true;
        return draft;
      }
      case types.BULK_SUCCESS: {
        draft.bulk.loading = false;
        draft.bulk.response = action.payload;
        return draft;
      }
      case types.BULK_FAILED: {
        draft.bulk.loading = false;
        draft.bulk.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
}, initialCustomersGroupState);

export default combineReducers({
  customersGroup,
});
