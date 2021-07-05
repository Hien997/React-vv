import React from 'react';
import { FormGroup } from 'reactstrap';
import { SelectCodeProps } from 'src/components/common/form/select-code';
import { MultiSelectCodeProps } from 'src/components/common/form/multi-select-code';
import { FormikMultiSelectCodeInput } from 'src/components/common/Formik/multi-select-code';
import { FormikSelectCodeInput } from 'src/components/common/Formik/select-code';
import { FormikErrorMessage } from '../../../common/Formik';
import { FormLabel } from '../label';

export type FormGroupSelectCodeProps = SelectCodeProps & {
  required?: boolean;
};

export const FormGroupSelectCodeInputItem = ({
  label,
  name,
  codeName,
  required = false,
  ...props
}: FormGroupSelectCodeProps) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikSelectCodeInput
        {...props}
        codeName={codeName}
        name={name}
        id={name}
      />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};

export type FormGroupMultiSelectCodeProps = MultiSelectCodeProps & {
  required?: boolean;
};

export const FormGroupMultiSelectCodeInputItem = ({
  label,
  name,
  codeName,
  required = false,
  ...props
}: FormGroupMultiSelectCodeProps) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikMultiSelectCodeInput
        {...props}
        codeName={codeName}
        name={name}
        id={name}
      />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
