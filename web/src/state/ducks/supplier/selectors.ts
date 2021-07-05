import { createSelector } from 'reselect';
import { StateAll } from '../models';
import {
  SupplierState,
  initialSupplierState,
  initialPaginationState,
} from './model';

const rootSelector = (state: StateAll) =>
  state.supplier.supplier || initialSupplierState;

export const getSupplierList = createSelector(
  rootSelector,
  (supplierState: SupplierState) => {
    return supplierState.list
      ? supplierState.list.response
      : initialSupplierState.list.response;
  }
);

export const getSupplierPagination = createSelector(
  rootSelector,
  (supplierState: SupplierState) => {
    return supplierState.list
      ? supplierState.list.response?.data.pagination
      : { ...initialPaginationState };
  }
);

export const getSupplierDetails = createSelector(
  rootSelector,
  (supplierState: SupplierState) => {
    return supplierState.details.response;
  }
);
