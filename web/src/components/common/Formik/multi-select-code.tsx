import React from 'react';
import { FormikConsumer, getIn, useField, useFormikContext } from 'formik';
import {
  MultiSelectCode,
  MultiSelectCodeProps,
} from '../form/multi-select-code';

export type FormikMultiSelectCodeProps = MultiSelectCodeProps;

export const FormikMultiSelectCodeInput = ({
  id = '',
  name,
  codeName,
  required = false,
  ...props
}: FormikMultiSelectCodeProps) => {
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

  const handleChange = (selectedValue) => {
    helper.setValue(selectedValue);
    if (props.onChange) {
      props.onChange(selectedValue);
    }
  };

  return (
    <FormikConsumer>
      {({ handleBlur }) => (
        <MultiSelectCode
          {...props}
          name={name}
          codeName={codeName}
          valid={valid}
          invalid={invalid}
          required={required}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          isMulti
        />
      )}
    </FormikConsumer>
  );
};
