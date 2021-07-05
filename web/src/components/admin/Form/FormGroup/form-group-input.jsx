import React from 'react';
import { FormGroup } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import { FormikInput, FormikErrorMessage } from '../../../common/Formik';
import { FormLabel } from '../label';

export const FormGroupInputItemCustom = (prop) => {
  return (
    <FormGroup>
      <FormLabel for={prop.name}>{prop.label}</FormLabel>

      <FormikInput
        name={prop.name}
        id={prop.name}
        handleBlurChange={prop.handleBlur || undefined}
      />

      <FormikErrorMessage name={prop.name} />
    </FormGroup>
  );
};

export const FormGroupInputItem = (
  { label = '',
    id = '',
    name = '',
    required = false,
    variant = 'outlined',
    className = '',
    size = 'small'
  }) => {

  return (
    <FormGroup>
      {/* <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikInput name={name} id={name} /> */}
      <TextField
        id={id || name}
        name={name}
        label={label}
        variant={variant}
        className={`${className || ''} common-texfield-input`}
        size={size}
      />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
