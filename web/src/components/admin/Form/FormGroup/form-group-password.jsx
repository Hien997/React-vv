import React from 'react';
import { FormGroup } from 'reactstrap';
import { FormikErrorMessage, FormikPassword } from '../../../common/Formik';
import { FormLabel } from '../label';

export const FormGroupInputPasswordItem = ({
  label,
  name,
  required = false,
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikPassword name={name} id={name} />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
