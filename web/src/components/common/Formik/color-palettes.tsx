import React from 'react';
import { getIn, useField, useFormikContext } from 'formik';
import { ColorPalettes, ColorPalettesProps } from '../color-palettes';

export type FormikColorPalettesProps = ColorPalettesProps & {
  id?: string;
  name: string;
  className?: string;
};

export const FormikColorPalettes: React.FC<FormikColorPalettesProps> = ({
  name,
  ...props
}) => {
  const {
    values,
    initialValues,
    // errors,
    // touched,
  } = useFormikContext();
  const [, , helper] = useField(name);

  // const valid = React.useMemo(() => {
  //   return !(errors[name] || getIn(errors, name));
  // }, [errors, name]);

  // const invalid = React.useMemo(() => {
  //   return !valid && (touched[name] || getIn(touched, name));
  // }, [touched, name, valid]);

  const memoValue = React.useMemo(() => {
    return (
      values[name] ||
      getIn(values, name) ||
      initialValues[name] ||
      getIn(initialValues, name) ||
      ''
    );
  }, [values, name, initialValues]);

  const handleChange = (value: string) => {
    helper.setValue(value);
  };

  return <ColorPalettes {...props} onChange={handleChange} value={memoValue} />;
};
