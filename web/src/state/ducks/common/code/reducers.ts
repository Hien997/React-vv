import produce, { Draft } from 'immer';
import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { CodeListState, initialCodeState } from './model';

const codeList = produce(
  (draft: Draft<CodeListState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getCodeList.request): {
        draft.codeData[action.payload.codeName] = { loading: true };
        return draft;
      }
      case getType(actions.getCodeList.success): {
        draft.codeData[action.payload.codeName] = {
          loading: false,
          response: action.payload.responseData,
        };
        return draft;
      }
      case getType(actions.getCodeList.failure): {
        draft.codeData[action.payload.codeName] = {
          loading: false,
          errors: action.payload.errors,
        };
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialCodeState.codeList
);

export default combineReducers({
  codeList,
});
