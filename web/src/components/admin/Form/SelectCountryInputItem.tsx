import React from 'react';
import { FormGroupSelectCodeInputItem } from './FormGroup/form-group-select-code';

type SelectCountryInputItemProps = {
  name: string;
  label: string;
};

function SelectCountryInputItem({ name, label }: SelectCountryInputItemProps) {
  return (
    <FormGroupSelectCodeInputItem
      label={label}
      name={name}
      codeName="countries"
    />
  );
}

export { SelectCountryInputItem };
