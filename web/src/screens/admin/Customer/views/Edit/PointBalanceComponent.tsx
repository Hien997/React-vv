import React from 'react';
import { Row, Col, FormGroup, Label } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import {
  FormGroupRadioListItems,
  FormGroupInputItem
} from '../../../../../components/admin/Form/FormGroup';
// import {
//   FormikErrorMessage,
//   FormikInput,
// } from '../../../../../components/common/Formik';

export type PointBalanceProps = {
  pointBalance: string;
};

const PointBalanceComponent: React.FC<PointBalanceProps> = ({ ...props }) => {
  const { t } = useTranslation('customer');
  const dataRadio = [
    {
      value: '1',
      label: 'Plus',
    },
    {
      value: '2',
      label: 'Minus',
    },
  ];
  return (
    <Row>
      <Col md="6" className="m-0">
        {/* <FormGroup>
          <Label>{t('customers_pointBalance')}</Label>
          {'     '}
          <Label className="h3">{props.pointBalance}</Label>
          <FormikInput name="point" id="point" />
          <FormikErrorMessage name="point" />
        </FormGroup> */}
        <FormGroupInputItem
          label={`${t('customers_pointBalance')}${props.pointBalance ? '(' + props.pointBalance + ')' : ''}`}
          name="point-balance"
        />
      </Col>
      <Col md="6" className="m-0">
        <FormGroupRadioListItems
          label=""
          name="point_action"
          listItem={dataRadio}
          options={{
            inline: true,
            className: "radioInline"
          }}
        />
      </Col>
    </Row>
  );
};

export default PointBalanceComponent;
