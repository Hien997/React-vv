import { useCallback, useEffect } from 'react';
import { batch, useDispatch } from 'react-redux';
import { CodeConditions, CodeItem, CodeName } from 'src/state/api-models/code';
import { codeActions, codeSelectors } from 'src/state/ducks/common/code';
import { useMemoSelector } from './use-memo-selector';

export const useCode = (codeNames?: CodeName | CodeName[]) => {
  const dispatch = useDispatch();
  const codeData = useMemoSelector(codeSelectors.getCodeData);

  const loadCodeList = useCallback(
    (
      // eslint-disable-next-line no-shadow
      codeNames: CodeName | CodeName[],
      conditions?: CodeConditions
    ) => {
      batch(() => {
        if (typeof codeNames === 'object') {
          for (const code of codeNames) {
            dispatch(codeActions.getCodeList.request({ codeName: code }));
          }
        } else {
          dispatch(codeActions.getCodeList.request({ codeName: codeNames }));
        }
      });
    },
    [dispatch]
  );

  const getCodeList = (codeName: CodeName): CodeItem[] => {
    const codeList = codeData && codeData[codeName];
    return codeList && codeList.response && codeList.response.data;
  };
  const getCode = (codeName: CodeName, value: string) => {
    const codeList = getCodeList(codeName);
    const codeItem = codeList && codeList.find((item) => item.value === value);
    return codeItem;
  };

  useEffect(() => {
    if (codeNames) {
      loadCodeList(codeNames);
    }
  }, [codeNames, loadCodeList]);

  return {
    loadCodeList,
    getCodeList,
    getCode,
  };
};
