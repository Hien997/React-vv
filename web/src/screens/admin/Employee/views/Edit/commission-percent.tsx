import React from 'react';
import { Row, Col, FormGroup, Label } from 'reactstrap';
import { useField } from 'formik';
import { EmployeeContractAccepted } from 'src/config/code/employee-contract-accepted';
import {
  FormGroupCheckboxItem,
  FormGroupInputItem,
} from '../../../../../components/admin/Form/FormGroup';
import {
  FormikInput,
  FormikRadio,
  FormikDateInput,
  FormikErrorMessage,
  FormikTextMask,
} from '../../../../../components/common/Formik';
import { FormLabel } from '../../../../../components/admin/Form/label';
import { TEXT_MARKER } from '../../../../../constants/text-marker';

const CommissionPercent = () => {
  const [, contractAcceptedTypeMeta] = useField(
    'employee.contract_accepted.type'
  );

  return (
    <Row>
      <Col md="9" sm="12" className="m-0">
        <FormGroup row>
          <Col md="4">
            <Label for="start_time">Start Time</Label>
          </Col>
          <Col sm="12" md="8">
            <FormikDateInput name="employee.start_time" id="start_time" />
            <FormikErrorMessage name="employee.start_time" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="4">
            <FormLabel required>Employee Accepted</FormLabel>
          </Col>
          <Col md="8" sm="12">
            <Row className="ml-0">
              <Col md="6" xs="6">
                <FormikRadio
                  name="employee.contract_accepted.type"
                  value={EmployeeContractAccepted[6040]}
                  id="contract_accepted_60_40"
                  label="60%|40%"
                />
              </Col>
              <Col md="6" sm="12">
                <FormikRadio
                  name="employee.contract_accepted.type"
                  value={EmployeeContractAccepted[5050]}
                  id="contract_accepted_50_50"
                  label="50%|50%"
                />
              </Col>
            </Row>
            <Row className="ml-0 mt-1">
              <Col md="6" sm="12">
                <FormikRadio
                  name="employee.contract_accepted.type"
                  value={EmployeeContractAccepted.PercentRate}
                  id="contract_accepted_other"
                  label="Other(%)"
                />
                <FormikTextMask
                  name="employee.contract_accepted.percent_rate"
                  id="employee.contract_accepted.percent_rate"
                  className="form-control"
                  mask={TEXT_MARKER.PERCENT_RATE}
                  disabled={
                    contractAcceptedTypeMeta.value !==
                    EmployeeContractAccepted.PercentRate
                  }
                />
                <FormikErrorMessage name="employee.contract_accepted.percent_rate" />
              </Col>

              <Col md="6" sm="12">
                <FormikRadio
                  name="employee.contract_accepted.type"
                  value={EmployeeContractAccepted.HourRate}
                  id="employee.contract_accepted.type"
                  label="Hour rate($/hr)"
                />
                <FormikInput
                  name="employee.contract_accepted.hour_rate"
                  type="number"
                  disabled={
                    contractAcceptedTypeMeta.value !==
                    EmployeeContractAccepted.HourRate
                  }
                />
                <FormikErrorMessage name="employee.contract_accepted.hour_rate" />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikErrorMessage name="employee.contract_accepted.type" />
              </Col>
            </Row>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="4">
            <Label>Employee Contract's:</Label>
          </Col>
          <Col md="8" sm="12">
            <Row>
              <Col md="6" sm="12">
                <FormGroupInputItem
                  label="Payroll per Check(%)"
                  type="number"
                  name="employee.payroll_per_check"
                />
              </Col>
              <Col md="6" sm="12">
                <FormGroupCheckboxItem
                  id="paid_tip_by_check"
                  label="Paid Tip by Check"
                  name="employee.paid_tip_by_check"
                />
              </Col>
            </Row>
          </Col>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CommissionPercent;
