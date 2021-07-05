import React from 'react';
import { FormGroup, Row, Col } from 'reactstrap';
import {
  FormikErrorMessage,
  FormikDateInput,
  FormikDateTimeInput,
  FormikDateRangePicker,
} from '../../../common/Formik';
import { FormLabel } from '../label';

export const FormGroupDateInputItem = ({ label, name, required = false }) => {
  return (
    <FormGroup>
      {/* <FormLabel for={name} required={required}>
        {label}
      </FormLabel> */}

      <FormikDateInput label={label} name={name} id={name} />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};

export const FormGroupDateInputRange = ({ label, name, required = false }) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>
      <Row>
        <Col xs="6">
          {/* <FormLabel for={name} required={required}>
            From
          </FormLabel> */}
          <FormikDateInput label="From" name={`${name}-from`} id={`${name}-from`} />
        </Col>

        <Col xs="6">
          {/* <FormLabel for={name} required={required}>
            To
          </FormLabel> */}
          <FormikDateInput label="To" name={`${name}-to`} id={`${name}-to`} />
        </Col>
      </Row>
      <FormikErrorMessage name={`${name}-from`} />
      <FormikErrorMessage name={`${name}-to`} />
    </FormGroup>
  );
};

export const FormGroupDateRangePicker = ({
  label,
  name,
  options = {},
  required = false,
}) => {
  return (
    <FormGroup>
      <Col md="3">
        <FormLabel for={name} required={required}>
          {label}
        </FormLabel>
      </Col>
      <Col md="9">
        <FormikDateRangePicker name={name} id={name} options={options} />
        <FormikErrorMessage name={name} />
      </Col>
    </FormGroup>
  );
};
export const FormGroupDateTimeInputItem = ({
  label,
  name,
  required = false,
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikDateTimeInput name={name} id={name} />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
