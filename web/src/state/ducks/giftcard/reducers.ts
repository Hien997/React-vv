import produce, { Draft } from 'immer';
import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { GiftcardState, initialGiftcardState } from './model';

const giftcard = produce(
  (draft: Draft<GiftcardState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getGiftcardList.request): {
        draft.list.loading = true;
        return draft;
      }
      case getType(actions.getGiftcardList.success): {
        draft.list.loading = true;
        draft.list.response = action.payload;
        return draft;
      }
      case getType(actions.getGiftcardList.failure): {
        draft.list.loading = false;
        draft.list.errors = action.payload;
        return draft;
      }
      case getType(actions.getGiftcardDetails.request): {
        draft.details.loading = true;
        draft.details.response = undefined;
        draft.details.errors = undefined;
        return draft;
      }
      case getType(actions.getGiftcardDetails.success): {
        draft.details.loading = true;
        draft.details.response = action.payload;
        return draft;
      }
      case getType(actions.getGiftcardDetails.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case getType(actions.createGiftcard.request): {
        draft.details.loading = true;
        draft.details.response = undefined;
        return draft;
      }
      case getType(actions.createGiftcard.success): {
        draft.create.loading = false;
        draft.create.response = action.payload;
        return draft;
      }
      case getType(actions.createGiftcard.failure): {
        draft.create.loading = false;
        draft.create.errors = action.payload;
        return draft;
      }
      case getType(actions.updateGiftcard.request): {
        draft.update.loading = true;
        draft.update.response = undefined;
        return draft;
      }
      case getType(actions.updateGiftcard.success): {
        draft.update.loading = false;
        draft.update.response = action.payload;
        return draft;
      }
      case getType(actions.updateGiftcard.failure): {
        draft.update.loading = false;
        draft.update.errors = action.payload;
        return draft;
      }
      case getType(actions.deleteGiftcard.request): {
        draft.delete.loading = true;
        draft.delete.response = undefined;
        return draft;
      }
      case getType(actions.deleteGiftcard.success): {
        draft.delete.loading = false;
        draft.delete.response = action.payload;
        return draft;
      }
      case getType(actions.deleteGiftcard.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case getType(actions.bulkGiftcards.request): {
        draft.bulk.loading = true;
        draft.bulk.response = undefined;
        return draft;
      }
      case getType(actions.bulkGiftcards.success): {
        draft.bulk.loading = false;
        draft.bulk.response = action.payload;
        return draft;
      }
      case getType(actions.bulkGiftcards.failure): {
        draft.bulk.loading = false;
        draft.bulk.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialGiftcardState
);

export default combineReducers({
  giftcard,
});
