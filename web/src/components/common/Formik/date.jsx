import React from 'react';
import { Input } from 'reactstrap';
import 'react-bootstrap-multiselect/css/bootstrap-multiselect.css';
import { FormikConsumer, getIn, useFormikContext } from 'formik';

import TextField from '@material-ui/core/TextField';

export const FormikDateInput = ({
  name,
  id,
  required = false,
  autoFocus = true,
  autoComplete = '',
  placeholder = '',
  className = '',
  label = '',
  margin = 'normal',
  size = 'small',
  variant = 'outlined',
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
      {({
        values,
        initialValues,
        errors,
        touched,
        handleBlur,
        handleChange,
      }) => (
          // <Input
          //   type="date"
          //   className={className}
          //   name={name}
          //   id={id}
          //   placeholder={placeholder}
          //   autoComplete={name}
          //   valid={!getIn(errors, name)}
          //   invalid={getIn(touched, name) && !!getIn(errors, name)}
          //   autoFocus={autoFocus}
          //   required={required}
          //   onChange={handleChange}
          //   onBlur={handleBlur}
          //   value={getIn(values, name) || getIn(initialValues, name)}
          // />
          <TextField
            id={id}
            name={name}
            type="date"
            defaultValue={getIn(values, name) || getIn(initialValues, name)}
            className={`${className || ''} common-texfield-date`}
            label={label}
            onChange={handleChange}
            onBlur={handleBlur}
            InputLabelProps={{
              shrink: true,
            }}
            size={size}
            variant={variant}
            autoComplete={name}
            invalid={invalid}
            autoFocus={autoFocus}
            value={value}
          />
        )}
    </FormikConsumer>
  );
};

export const FormikDateTimeInput = ({
  name,
  id,
  required = false,
  autoFocus = true,
  autoComplete = '',
  placeholder = '',
  className = '',
  label = '',
  margin = 'normal',
  size = 'small',
  variant = 'outlined',
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
      {({
        values,
        initialValues,
        errors,
        touched,
        handleBlur,
        handleChange,
      }) => (
          // <Input
          //   type="datetime-local"
          //   className={className}
          //   name={name}
          //   id={id}
          //   placeholder={placeholder}
          //   autoComplete={name}
          //   valid={!getIn(errors, name)}
          //   invalid={getIn(touched, name) && !!getIn(errors, name)}
          //   autoFocus={autoFocus}
          //   required={required}
          //   onChange={handleChange}
          //   onBlur={handleBlur}
          //   value={getIn(values, name) || getIn(initialValues, name)}
          // />
          <TextField
            id={id}
            name={name}
            type="datetime-local"
            defaultValue={getIn(values, name) || getIn(initialValues, name)}
            className={`${className || ''} common-texfield-datetime`}
            label={label}
            onChange={handleChange}
            onBlur={handleBlur}
            InputLabelProps={{
              shrink: true,
            }}
            size={size}
            variant={variant}
          />
        )}
    </FormikConsumer>
  );
};
