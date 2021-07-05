import React from 'react';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
import { FormikConsumer, getIn, useFormikContext } from 'formik';

export const FormikTextMask = ({ id = '', name, mask, ...props }) => {
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
        <TextMask
          {...props}
          mask={mask}
          Component={InputAdapter}
          name={name}
          id={name}
          valid={valid}
          invalid={invalid}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      )}
    </FormikConsumer>
  );
};
