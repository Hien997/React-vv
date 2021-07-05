import produce, { Draft } from 'immer';
import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { StoreState, initialStoreState } from './model';

const store = produce(
  (draft: Draft<StoreState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getStoreList.request): {
        draft.list.loading = true;
        return draft;
      }
      case getType(actions.getStoreList.success): {
        draft.list.loading = false;
        draft.list.response = action.payload;
        return draft;
      }
      case getType(actions.getStoreList.failure): {
        draft.list.loading = false;
        draft.list.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialStoreState
);

export default combineReducers({
  store,
});
