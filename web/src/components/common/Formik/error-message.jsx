import React from 'react';
import { getIn, useFormikContext } from 'formik';

const style = {
  width: '100%',
  marginTop: '0.25rem',
  fontSize: '80%',
  color: '#f86c6b',
};

export const FormikErrorMessage = ({ name, className = '' }) => {
  const { errors } = useFormikContext();

  const errorMessage = React.useMemo(() => {
    return errors[name] || getIn(errors, name);
  }, [errors, name]);

  return <>{errorMessage && <div style={style}>{errorMessage}</div>}</>;
};
