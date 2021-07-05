import React from 'react';
import { FormGroup } from 'reactstrap';
import {
  FormikColorPalettes,
  FormikErrorMessage,
} from '../../../common/Formik';
import { FormLabel } from '../label';

export const FormGroupColorPalettesItem = ({
  label,
  name,
  palettes,
  required = false,
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikColorPalettes palettes={palettes} name={name} />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
