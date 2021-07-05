import React from 'react';
import { FormGroup } from 'reactstrap';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {
  FormikErrorMessage,
  FormikMultiSelectInput,
  // FormikSelectInput,
} from '../../../common/Formik';
import { FormLabel } from '../label';
import { FormikDropdownTreeSelect } from '../../../common/Formik/dropdown-tree-select';

export type FormGroupSelectProps = import('.').FormGroupProps &
  TextFieldProps & {
    options: import('src/state/api-models/code').CodeItem[];
    multiple?: boolean;
  };

export const FormGroupSelectInputItem: React.FC<FormGroupSelectProps> = ({
  id = '',
  label,
  name,
  options = [],
  multiple = false,
  required = false,
  helperText = '',
  variant = 'outlined',
  size = 'small',
  value = '',
  className = '',
  ...props
}) => {
  return (
    <FormGroup>
      {/* <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikSelectInput
        name={name}
        id={name}
        options={options}
        multiple={multiple}
      /> */}
      <TextField
        id={id || name}
        name={name}
        select
        label={label}
        value={value}
        helperText={helperText}
        variant={variant}
        className={`${className || ''} common-texfield-select`}
        size={size}
        onChange={props.onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};

export type FormGroupMultiSelectProps = import('.').FormGroupProps & {
  options: import('src/state/api-models/code').CodeItem[];
  multiple: boolean;
};

export const FormGroupMultiSelectInputItem: React.FC<FormGroupMultiSelectProps> = ({
  label,
  name,
  options,
  multiple = false,
  required = false,
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikMultiSelectInput
        name={name}
        id={name}
        options={options}
        multiple={multiple}
      />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};

export type FormGroupDropdownTreeSelectProps = import('.').FormGroupProps & {
  options: import('src/state/api-models/code').CodeItem[];
  multiple: boolean;
};

export const FormGroupDropdownTreeSelect: React.FC<FormGroupDropdownTreeSelectProps> = ({
  id = '',
  label,
  name,
  options,
  multiple = false,
  required = false,
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikDropdownTreeSelect
        name={name}
        id={id}
        options={options}
        multiple={multiple}
      />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
