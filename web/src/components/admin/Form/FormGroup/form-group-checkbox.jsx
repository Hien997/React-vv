import React from 'react';
// import { FormLabel } from '../label';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { FormikErrorMessage } from '../../../common/Formik';

export const FormGroupCheckboxItem = ({
  id = '',
  label = '',
  name = '',
  color = 'primary',
  handleChange = null,
  className = '',
  ...props }) => {
  return (
    <FormGroup>
      {/* <FormikCheckbox id={id} label={label} /> */}
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            onChange={handleChange}
            name={name}
            color={color}
            className={`${className} common-checkbox-item`}
            {...props}
          />
        }
        label={label}
      />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};

export const FormGroupCheckboxListItems = ({
  label = '',
  name,
  listItem,
  options = {},
  required = false,
  className = '',
  handleChange,
  helpertext = '',
  color = 'primary'
}) => {
  return (
    // <FormGroup>
    //   <Col md="3">
    //     <FormLabel for={name} required={required}>
    //       {label}
    //     </FormLabel>
    //   </Col>
    //   <Col md="9">
    //     {listItem.map((item, i) => {
    //       return (
    //         <FormGroup
    //           check
    //           inline={options.inline}
    //           key={`checkbox${item.value}`}
    //         >
    //           <FormikCheckbox
    //             id={`checkbox${i}`}
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
    <FormControl component="fieldset" className={`${className} common-checkbox-group`}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {listItem.map((item, i) => {
          return (
            <FormControlLabel
              key="checkbox"
              id={`checkbox${i}`}
              control={<Checkbox onChange={handleChange} name={name} color={color} />}
              label={item.label}
            />
          );
        })}
      </FormGroup>
      <FormHelperText>{helpertext}</FormHelperText>
    </FormControl>
  );
};
