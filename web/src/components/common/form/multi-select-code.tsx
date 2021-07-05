import React from 'react';
import { useCode } from 'src/hooks';
import { CodeName } from 'src/state/api-models/code';
import { MultiSelectInput, MultiSelectProps } from './multi-select';

export type MultiSelectCodeProps = Omit<
  MultiSelectProps,
  'options' | 'value'
> & {
  codeName: CodeName;
  value?: string[];
};

export const MultiSelectCode: React.FC<MultiSelectCodeProps> = (props) => {
  const { getCodeList } = useCode(props.codeName);
  const codeList = getCodeList(props.codeName) || [];

  const value = React.useMemo(() => {
    return codeList.filter(
      (code) =>
        props.value && props.value.findIndex((i) => i === code.value) >= 0
    );
  }, [codeList, props]);

  const options = React.useMemo(() => {
    return codeList;
  }, [codeList]);

  return <MultiSelectInput {...props} options={options} value={value} />;
};
