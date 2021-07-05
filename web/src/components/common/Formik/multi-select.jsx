import React from 'react';
import { FormikConsumer, getIn, useField, useFormikContext } from 'formik';
import { MultiSelectInput } from '../form/multi-select';

export const FormikMultiSelectInput = ({
  id = '',
  name,
  options,
  required = false,
  multiple = false,
  autoFocus = true,
  autoComplete = '',
  placeholder = '',
  className = '',
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

  const handleChange = (selectedOption) => {
    helper.setValue(selectedOption);
  };

  return (
    <FormikConsumer>
      {({ handleBlur }) => (
        <MultiSelectInput
          id={id}
          name={name}
          options={options}
          valid={valid}
          invalid={invalid}
          autoFocus={autoFocus}
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
