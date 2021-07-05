import { BaseState } from '../models';
import { StoreListResponse } from '../../api-models/store';

export type StoreList = BaseState<StoreListResponse>;

export type StoreState = {
  list: StoreList;
};

export const initialStoreState = {
  list: { loading: false, response: undefined },
};

declare module './../models' {
  interface StateAll {
    // match to a duck folder
    store: {
      store: StoreState;
    };
  }
}
