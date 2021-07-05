import React from 'react';
import { FormGroup } from 'reactstrap';
import { FormikErrorMessage, FormikTextMask } from '../../../common/Formik';
import { FormLabel } from '../label';

export const FormGroupTextMaskItem = ({
  label,
  name,
  mask,
  required = false,
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikTextMask
        mask={mask}
        className="form-control"
        name={name}
        id={name}
      />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
