import React from 'react';
import { Input } from 'reactstrap';
import { FormikConsumer, getIn, useFormikContext } from 'formik';

export const FormikPassword = ({
  id = '',
  name,
  required = false,
  autoFocus = true,
  autoComplete = '',
  placeholder = '',
  className = '',
}) => {
  const { values, initialValues, errors, touched } = useFormikContext();

  const valid = React.useMemo(() => {
    return !(errors[name] || getIn(errors, name));
  }, [errors, name]);

  const invalid = React.useMemo(() => {
    return !valid && (touched[name] || getIn(touched, name));
  }, [touched, name, valid]);

  const value = React.useMemo(() => {
    return (
      values[name] ||
      getIn(values, name) ||
      initialValues[name] ||
      getIn(initialValues, name) ||
      ''
    );
  }, [values, name, initialValues]);

  return (
    <FormikConsumer>
      {({ handleBlur, handleChange }) => (
        <Input
          type="password"
          className={className}
          name={name}
          id={id}
          placeholder={placeholder}
          autoComplete={name}
          valid={valid}
          invalid={invalid}
          autoFocus={autoFocus}
          required={required}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      )}
    </FormikConsumer>
  );
};
