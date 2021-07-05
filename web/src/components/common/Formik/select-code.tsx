import React from 'react';
import { FormikConsumer, getIn, useField, useFormikContext } from 'formik';
import { SelectCode, SelectCodeProps } from '../form/select-code';

export type FormikSelectCodeProps = SelectCodeProps;

export const FormikSelectCodeInput = ({
  id = '',
  name,
  codeName,
  required = false,
  multiple = false,
  ...props
}) => {
  const [, , helper] = useField(name);

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    helper.setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <FormikConsumer>
      {({ handleBlur }) => (
        <SelectCode
          {...props}
          id={id}
          name={name}
          codeName={codeName}
          valid={valid}
          invalid={invalid}
          required={required}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      )}
    </FormikConsumer>
  );
};
