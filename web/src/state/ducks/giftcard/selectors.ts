import { createSelector } from 'reselect';
import { StateAll } from '../models';
import { GiftcardState, initialGiftcardState } from './model';

const rootSelector = (state: StateAll) =>
    state.giftcard.giftcard || initialGiftcardState;

export const getGiftcardList = createSelector(
    rootSelector,
    (giftcardState: GiftcardState) => {
        return giftcardState.list
            ? giftcardState.list.response
            : initialGiftcardState.list.response;
    }
);

export const getGiftcardCreated = createSelector(
    rootSelector,
    (giftcardState: GiftcardState) => {
        return giftcardState.create
            ? giftcardState.create.response
            : initialGiftcardState.create.response;
    }
);

export const getGiftcardDeleted = createSelector(
    rootSelector,
    (giftcardState: GiftcardState) => {
        return giftcardState.delete
            ? giftcardState.delete.response
            : initialGiftcardState.delete.response;
    }
);

export const getGiftcardUpdate = createSelector(
    rootSelector,
    (giftcardState: GiftcardState) => {
        return giftcardState.update
            ? giftcardState.update.response
            : initialGiftcardState.update.response;
    }
);

export const getGiftcardBulk = createSelector(
    rootSelector,
    (giftcardState: GiftcardState) => {
        return giftcardState.bulk
            ? giftcardState.bulk.response
            : initialGiftcardState.bulk.response;
    }
);

export const getGiftcardDetails = createSelector(
    rootSelector,
    (giftcardState: GiftcardState) => {
        return giftcardState.details.response;
    }
);
