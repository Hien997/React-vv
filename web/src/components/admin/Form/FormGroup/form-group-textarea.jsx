import React from 'react';
import { FormGroup } from 'reactstrap';
import { FormikErrorMessage } from '../../../common/Formik';
import TextField from '@material-ui/core/TextField';

export const FormGroupTextAreaItem = ({
  id = '',
  label = '',
  name = '',
  className = '',
  placeholder = '',
  required = false,
  variant = 'outlined'
}) => {
  return (
    <FormGroup>
      {/* <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikTextArea name={name} id={name} /> */}
      <TextField
        id={id}
        label={label}
        placeholder={placeholder}
        className={`${className} common-textarea-textfield`}
        multiline
        variant={variant}
      />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
