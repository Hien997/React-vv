import React from 'react';
import { FormGroup, Label, Row } from 'reactstrap';
import { FormikErrorMessage } from '../../../common/Formik';
import { FormikSwitcher } from '../../../common/Formik/switcher';

export const FormGroupSwitcherItem = ({ id, label, name, ...props }) => {
  return (
    <FormGroup>
      <Row>
        <FormikSwitcher {...props} id={id} label={label} name={name} />
        <Label for={id} className="form-check-label ml-2">
          {label}
        </Label>
      </Row>
      <Row>
        <FormikErrorMessage name={name} />
      </Row>
    </FormGroup>
  );
};
