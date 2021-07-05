import { createSelector } from 'reselect';
import { StateAll } from '../models';
import { StoreState, initialStoreState } from './model';

const rootSelector = (state: StateAll) =>
  state.store.store || initialStoreState;

export const getSupplierList = createSelector(
  rootSelector,
  (storeState: StoreState) => {
    return storeState.list
      ? storeState.list.response
      : initialStoreState.list.response;
  }
);

