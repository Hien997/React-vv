import React from 'react';
import { Input } from 'reactstrap';
import { FormikConsumer, useFormikContext, getIn } from 'formik';

export const FormikInput = ({
  id = '',
  type = 'text',
  name,
  handleBlurChange = () => {},
  ...props
}) => {
  const {
    initialValues,
    values,
    errors,
    touched,
    setFieldTouched,
  } = useFormikContext();
  const handleBlur = (e) => {
    handleBlurChange(e.target.value);
    setFieldTouched(name, true, true);
  };

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
      {({ handleChange }) => {
        return (
          <Input
            {...props}
            type={type}
            name={name}
            id={id}
            valid={valid}
            invalid={invalid}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
          />
        );
      }}
    </FormikConsumer>
  );
};
