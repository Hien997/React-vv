import { createSelector } from 'reselect';
import { StateAll } from '../models';
import { ServiceState, initialServiceState } from './model';

const rootSelector = (state: StateAll) =>
  state.service.service || initialServiceState;

export const getServiceList = createSelector(
  rootSelector,
  (serviceState: ServiceState) => {
    return serviceState.list
      ? serviceState.list.response
      : initialServiceState.list.response;
  }
);

export const getServiceDelete = createSelector(
  rootSelector,
  (serviceState: ServiceState) => {
    return serviceState.delete
      ? serviceState.delete.response
      : initialServiceState.delete.response;
  }
);

export const getServiceCreate = createSelector(
  rootSelector,
  (serviceState: ServiceState) => {
    return serviceState.create
      ? serviceState.create
      : initialServiceState.create;
  }
);

export const getServiceUpdate = createSelector(
  rootSelector,
  (serviceState: ServiceState) => {
    return serviceState.update
      ? serviceState.update
      : initialServiceState.update;
  }
);


export const getServicceDetails = createSelector(
  rootSelector,
  (serviceState: ServiceState) => {
    return serviceState.details.response;
  }
);

export const getServicceImports = createSelector(
  rootSelector,
  (serviceState: ServiceState) => {
    return serviceState.import;
  }
);

