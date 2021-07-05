import React from 'react';
import { Input, Label } from 'reactstrap';
import { FormikConsumer, getIn, useFormikContext } from 'formik';

export const FormikRadio = ({
  id = '',
  name,
  value,
  label,
  required = false,
  className = '',
}) => {
  const { values, initialValues, errors, touched } = useFormikContext();

  const currentValue = React.useMemo(() => {
    return (
      values[name] ||
      getIn(values, name) ||
      initialValues[name] ||
      getIn(initialValues, name)
    );
  }, [values, initialValues, name]);

  const valid = React.useMemo(() => {
    return !(errors[name] || getIn(errors, name));
  }, [errors, name]);

  const invalid = React.useMemo(() => {
    return !valid && (touched[name] || getIn(touched, name));
  }, [touched, name, valid]);

  return (
    <FormikConsumer>
      {({ handleBlur, handleChange }) => (
        <>
          <Input
            type="radio"
            className={className}
            id={id}
            name={name}
            label={label}
            required={required}
            valid={valid}
            invalid={invalid}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            checked={value === currentValue}
          />
          <Label for={id} className="form-check-label">
            {label}
          </Label>
        </>
      )}
    </FormikConsumer>
  );
};
