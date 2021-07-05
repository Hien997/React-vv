import React from 'react';
import { useCode } from 'src/hooks';
import { CodeName } from 'src/state/api-models/code';
import { Select, SelectProps } from './select';

export type SelectCodeProps = Omit<SelectProps, 'options'> & {
  codeName: CodeName;
};

export const SelectCode: React.FC<SelectCodeProps> = (props) => {
  const { getCodeList } = useCode(props.codeName);
  const options = React.useMemo(() => {
    const codeList = getCodeList(props.codeName) || [];

    return codeList;
  }, [getCodeList, props]);

  return <Select {...props} options={options} />;
};
