import { CodeListResponse } from 'src/state/api-models/code';
import { BaseState } from '../../models';

export type CodeList = BaseState<CodeListResponse>;

export type CodeListState = {
  codeData: {
    [key: string]: CodeList;
  };
};

export type CodeState = {
  codeList: CodeListState;
};

export const initialCodeState = {
  codeList: { codeData: {} },
};

declare module './../../models' {
  interface StateAll {
    // match to a duck folder
    'common/code': CodeState;
  }
}
