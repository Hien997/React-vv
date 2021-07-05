import { createSelector } from 'reselect';
import { StateAll } from '../models';
import { CustomerState, initialCustomerState } from './model';

const rootSelector = (state: StateAll) =>
  state.customer.customer || initialCustomerState;

export const getCustomerList = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.list
      ? customerState.list.response
      : initialCustomerState.list.response;
  }
);

export const getCustomerDetails = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.details.response;
  }
);

export const getInputCustomer = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.details.response;
  }
);

export const getInputSearch = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.paraSearch;
  }
);

export const getHistoryPoint = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.listHistoryPoint;
  }
);

export const getReviews = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.listReviews;
  }
);

export const getBulkActionReponse = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.bulk.response;
  }
);

export const getImportActionReponse = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.import.response;
  }
);

