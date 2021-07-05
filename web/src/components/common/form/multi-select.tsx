import React from 'react';
import Select, { Props } from 'react-select';

export type MultiSelectProps = Omit<Props, 'onChange'> & {
  onChange?: (value: string[]) => void;
};

export const MultiSelectInput = (props: MultiSelectProps) => {
  const handleChange = (selectedOption) => {
    const values = selectedOption && selectedOption.map((item) => item.value);
    if (props.onChange) {
      props.onChange(values);
    }
  };

  return <Select {...props} isMulti onChange={handleChange} />;
};
