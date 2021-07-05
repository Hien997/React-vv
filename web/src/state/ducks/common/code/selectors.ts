import { createSelector } from 'reselect';
import { StateAll } from '../../models';
import { CodeState, initialCodeState } from './model';

const rootSelector = (state: StateAll) =>
  state['common/code'] || initialCodeState;

export const getCodeData = createSelector(
  rootSelector,
  (codeState: CodeState) => {
    return (
      (codeState && codeState.codeList && codeState.codeList.codeData) || {}
    );
  }
);
