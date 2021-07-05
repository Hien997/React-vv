import React from 'react';
import { AppSwitch } from '@coreui/react';
import { FormikConsumer, getIn, useField, useFormikContext } from 'formik';

export const FormikSwitcher = ({
  id = '',
  name,
  label,
  required = false,
  className = '',
  ...props
}) => {
  const [, meta, helper] = useField(name);
  const { errors, touched } = useFormikContext();

  const checked = React.useMemo(() => {
    return meta.value !== undefined ? meta.value : meta.initialValue;
  }, [meta.initialValue, meta.value]);

  const valid = React.useMemo(() => {
    return !(errors[name] || getIn(errors, name));
  }, [errors, name]);

  const invalid = React.useMemo(() => {
    return !valid && (touched[name] || getIn(touched, name));
  }, [touched, name, valid]);

  const handleChange = (e: React.FocusEvent<any>) => {
    helper.setValue(e.target.checked);
  };

  return (
    <FormikConsumer>
      {({ handleBlur }) => (
        <>
          <AppSwitch
            {...props}
            variant="pill"
            color="primary"
            className={className}
            id={id}
            name={name}
            label={label}
            required={required}
            checked={checked}
            valid={valid}
            invalid={invalid}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </>
      )}
    </FormikConsumer>
  );
};
