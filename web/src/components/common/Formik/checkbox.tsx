import React from 'react';
import { Input, Label } from 'reactstrap';
import { FormikConsumer, getIn, useField, useFormikContext } from 'formik';

export const FormikCheckbox = ({
  label,
  id,
  name,
  checkedValue = true,
  unCheckedValue = false,
  required = false,
  className = '',
}) => {
  const { initialValues, values, errors, touched } = useFormikContext();
  const [, , helper] = useField(name);

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

  const handleChange = (e: React.FocusEvent<any>) => {
    helper.setValue(e.target.checked ? checkedValue : unCheckedValue);
  };

  return (
    <FormikConsumer>
      {({ handleBlur }) => (
        <>
          <Input
            type="checkbox"
            className={className}
            id={id}
            name={name}
            label={label}
            required={required}
            valid={valid}
            invalid={invalid}
            onChange={handleChange}
            onBlur={handleBlur}
            checked={currentValue === checkedValue}
          />
          <Label for={id} className="form-check-label">
            {label}
          </Label>
        </>
      )}
    </FormikConsumer>
  );
};
