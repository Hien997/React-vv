import React from 'react';
import { Input, Label } from 'reactstrap';
import { FormikConsumer, getIn, useField, useFormikContext } from 'formik';

export const FormikRadioGroup = ({ options, name }) => {
  const { values, initialValues, errors, touched } = useFormikContext();
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

  const handleChange = (value: any) => {
    helper.setValue(value);
  };

  return (
    <FormikConsumer>
      {({ handleBlur }) => (
        <>
          {options &&
            options.map((item, i) => {
              return (
                <span className="mr-5" key={`radio-${item.id}`}>
                  <Input
                    type="radio"
                    key={`radio-${item.id}`}
                    id={item.id}
                    name={name}
                    valid={valid}
                    invalid={invalid}
                    onChange={() => handleChange(item.value)}
                    onBlur={handleBlur}
                    value={item.value}
                    label={item.label}
                    className="form-check-label"
                    checked={item.value === String(currentValue)}
                  />
                  <Label for={item.id} className="form-check-label">
                    {item.label}
                  </Label>
                </span>
              );
            })}
        </>
      )}
    </FormikConsumer>
  );
};
