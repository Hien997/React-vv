import produce, { Draft } from 'immer';
import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { MemberShipState, initialMemberShipState } from './model';

const membership = produce(
  (draft: Draft<MemberShipState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getMembershipList.request): {
        draft.list.loading = true;
        return draft;
      }
      case getType(actions.getMembershipList.success): {
        draft.list.loading = false;
        draft.list.response = action.payload;
        return draft;
      }
      case getType(actions.getMembershipList.failure): {
        draft.list.loading = false;
        draft.list.errors = action.payload;
        return draft;
      }
      case getType(actions.createMembership.request): {
        draft.create.loading = true;
        return draft;
      }
      case getType(actions.createMembership.success): {
        draft.create.loading = false;
        draft.create.response = action.payload;
        return draft;
      }
      case getType(actions.createMembership.failure): {
        draft.create.loading = false;
        draft.create.errors = action.payload;
        return draft;
      }
      case getType(actions.updateMembership.request): {
        draft.update.loading = true;
        return draft;
      }
      case getType(actions.updateMembership.success): {
        draft.update.loading = false;
        draft.update.response = action.payload;
        return draft;
      }
      case getType(actions.updateMembership.failure): {
        draft.update.loading = false;
        draft.update.errors = action.payload;
        return draft;
      }

      case getType(actions.detailMembership.request): {
        draft.detail.loading = true;
        return draft;
      }
      case getType(actions.detailMembership.success): {
        draft.detail.loading = false;
        draft.detail.response = action.payload;
        return draft;
      }
      case getType(actions.detailMembership.failure): {
        draft.detail.loading = false;
        draft.detail.errors = action.payload;
        return draft;
      }
      case getType(actions.deleteMembership.request): {
        draft.delete.loading = true;
        return draft;
      }
      case getType(actions.deleteMembership.success): {
        draft.delete.loading = false;
        draft.delete.response = action.payload;
        return draft;
      }
      case getType(actions.deleteMembership.failure): {
        draft.history.loading = false;
        draft.history.errors = action.payload;
        return draft;
      }
      case getType(actions.historyMembership.request): {
        draft.history.loading = true;
        return draft;
      }
      case getType(actions.historyMembership.success): {
        draft.history.loading = false;
        draft.history.response = action.payload;
        return draft;
      }
      case getType(actions.historyMembership.failure): {
        draft.history.loading = false;
        draft.history.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialMemberShipState
);

export default combineReducers({
  membership,
});
