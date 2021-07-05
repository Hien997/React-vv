import { createSelector } from 'reselect';
import { StateAll } from '../models';
import { MemberShipState, initialMemberShipState } from './model';

const rootSelector = (state: StateAll) =>
  state.membership.membership || initialMemberShipState;

export const getMembershipList = createSelector(
  rootSelector,
  (membershipList: MemberShipState) => {
    return membershipList.list
      ? membershipList.list.response
      : initialMemberShipState.list.response;
  }
);


export const getCreate = createSelector(
  rootSelector,
  (membershipList: MemberShipState) => {
    return membershipList.create
      ? membershipList.create.response
      : initialMemberShipState.create.response;
  }
);

export const getDetailMembership = createSelector(
  rootSelector,
  (membershipList: MemberShipState) => {
    return membershipList.detail.response
      ? membershipList.detail.response
      : initialMemberShipState.detail.response;
  }
);

export const getDeleteMembership = createSelector(
  rootSelector,
  (membershipList: MemberShipState) => {
    return membershipList.delete.response
      ? membershipList.delete.response
      : initialMemberShipState.delete.response;
  }
);

export const getUpdateMembership = createSelector(
  rootSelector,
  (membershipList: MemberShipState) => {
    return membershipList.update.response
      ? membershipList.update.response
      : initialMemberShipState.update.response;
  }
);

export const getHistoryMembership = createSelector(
  rootSelector,
  (membershipList: MemberShipState) => {
    return membershipList.history
      ? membershipList.history
      : initialMemberShipState.history;
  }
);





