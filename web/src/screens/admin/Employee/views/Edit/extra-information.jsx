import React from 'react';
import { Row, Col } from 'reactstrap';
import { FormikErrorMessage } from 'src/components/common/Formik';
import { BG_COLORS, COLORS } from 'src/constants/color';
import {
  FormGroupInputItem,
  FormGroupColorPalettesItem,
} from '../../../../../components/admin/Form/FormGroup';

export const ExtraInformation = () => {
  return (
    <>
      <Row>
        <Col md="9" sm="12" className="m-0">
          <Row>
            <Col md="6" sm="12" className="m-0">
              <FormGroupInputItem label="Address" name="employee.address" />
            </Col>

            <Col md="6" sm="12" className="m-0">
              <FormGroupInputItem label="City" name="employee.city" />
            </Col>
          </Row>

          <Row>
            <Col md="6" sm="12" className="m-0">
              <FormGroupInputItem label="State" name="employee.state" />
            </Col>

            <Col md="6" sm="12" className="m-0">
              <FormGroupInputItem label="Zip" name="employee.zipcode" />
            </Col>
          </Row>

          <Row>
            <Col md="12" sm="12" className="m-0">
              <FormGroupColorPalettesItem
                palettes={BG_COLORS}
                label="Choose BG"
                name="employee.e_style.bg"
              />
              <FormikErrorMessage name="employee.e_style.bg" />
            </Col>
          </Row>

          <Row>
            <Col md="12" sm="12" className="m-0">
              <FormGroupColorPalettesItem
                palettes={COLORS}
                label="Choose Color"
                name="employee.e_style.color"
              />
              <FormikErrorMessage name="employee.e_style.color" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
