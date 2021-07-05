import { createSelector } from 'reselect';
import { StateAll } from '../models';
import { CustomersGroupState, initialCustomersGroupState } from './model';
import { CustomersGroup } from '../../models/customer';

const rootSelector = (state: StateAll) =>
  state.customersGroup.customersGroup || initialCustomersGroupState;

export const getcustomersGroupList = createSelector(
  rootSelector,
  (customersGroupState: CustomersGroupState) => {
    return customersGroupState.list
      ? customersGroupState.list.response
      : initialCustomersGroupState.list.response;
  }
);

export const getcustomersGroupListConvert = createSelector(
  rootSelector,
  (customersGroupState: CustomersGroupState) => {

    let data =  customersGroupState.list && customersGroupState.list.response && customersGroupState.list.response.data 
    ? customersGroupState.list.response.data.customersGroup
    : initialCustomersGroupState.list.response && initialCustomersGroupState.list.response.data? initialCustomersGroupState.list.response.data.customersGroup : [];    
    
    const dataGroup = data && data.map((dataDisplay: CustomersGroup) => {      
      return {
        value: dataDisplay.id,
        label: dataDisplay.group_name
    }});

    dataGroup.unshift({value:'',label:'Please Select'});
    return dataGroup;
  }
);

export const getcustomersGroupDetails = createSelector(
  rootSelector,
  (customersGroupState: CustomersGroupState) => {
    return customersGroupState.details.response;
  }
);
