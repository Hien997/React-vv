import React from 'react';
import { Input } from 'reactstrap';
import { FormikConsumer, getIn, useFormikContext } from 'formik';

export const FormikFile = ({
  id = '',
  name,
  required = false,
  autoFocus = true,
  autoComplete = '',
  placeholder = '',
  className = '',
}) => {
  const { initialValues, values } = useFormikContext();

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
          type="file"
          className={className}
          name={name}
          id={id}
          required={required}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      )}
    </FormikConsumer>
  );
};
