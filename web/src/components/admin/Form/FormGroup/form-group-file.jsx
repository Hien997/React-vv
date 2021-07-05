import React from 'react';
import { FormGroup } from 'reactstrap';
import { FormikFile, FormikErrorMessage } from '../../../common/Formik';
import { FormLabel } from '../label';

export const FormGroupFileItem = ({ label, name, required = false }) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikFile name={name} id={name} />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
