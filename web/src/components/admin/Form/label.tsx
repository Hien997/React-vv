import React from 'react';
import { Label } from 'reactstrap';

export type FormLabelProps = React.PropsWithChildren<{
  for?: string;
  required?: boolean;
}>;

export const FormLabel: React.FC<FormLabelProps> = ({ ...props }) => {
  return (
    <Label for={props.for}>
      <>
        {props.children}
        {props.required && ' (*)'}
      </>
    </Label>
  );
};
