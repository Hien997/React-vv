import React from 'react';
import { FormGroup } from 'reactstrap';
// import { FormLabel } from '../label';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { FormikErrorMessage, FormikRadioGroup } from '../../../common/Formik';

export const FormGroupRadio = ({
  label,
  name,
  options = [],
  required = false,
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormGroup check>
        <FormikRadioGroup name={name} options={options} />
        <FormikErrorMessage name={name} />
      </FormGroup>
    </FormGroup>
  );
};

export const FormGroupRadioListItems = ({
  label,
  name,
  listItem,
  options = {},
  required = false,
  labelPlacement = 'end',
  color = 'primary',
  size = 'small'
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label || ''}</FormLabel>
      <RadioGroup row aria-label={name} name={name}>
        {listItem.map((item, i) => {
          return (
            <FormControlLabel
              value={item.value}
              control={<Radio color={color} size={size} />}
              label={item.label}
              labelPlacement={labelPlacement}
              key={`radio-${name}-${item.value}`}
            />
          );
        })}

      </RadioGroup>
    </FormControl>
    // <FormGroup>
    //   <Col md="3">
    //     <FormLabel for={name} required={required}>
    //       {label}
    //     </FormLabel>
    //   </Col>
    //   <Col md="12">
    //     {listItem.map((item, i) => {
    //       return (
    //         <FormGroup
    //           check
    //           inline={options.inline}
    //           key={`checkbox${item.value}`}
    //           className={options.className}
    //         >
    //           <FormikRadio
    //             id={`radio${i}`}
    //             name={name}
    //             label={item.label}
    //             value={item.value}
    //           />
    //         </FormGroup>
    //       );
    //     })}
    //     <FormikErrorMessage name={name} />
    //   </Col>
    // </FormGroup>
  );
};
