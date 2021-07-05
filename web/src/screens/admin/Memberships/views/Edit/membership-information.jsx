import React from 'react';
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import {
  FormGroupInputItem,
  FormGroupSelectInputItem,
  FormGroupDateTimeInputItem,
} from '../../../../../components/admin/Form/FormGroup';
import { Code } from '../../../../../config/code';
import { CalculationPoint, AmountType } from './util';

const BasicInformation = () => {
  const { t } = useTranslation('membership');

  const Stores = [
    { value: 'c3ec8062-b8e5-11ea-b3de-0242ac130034', label: 'Store1' },
    { value: 'c3ec8062-b8e5-11ea-b3de-0242ac130035', label: 'Store2' },
    { value: 'c3ec8062-b8e5-11ea-b3de-0242ac130036', label: 'Store3' },
  ];

  return (
    <>
      <Row>
        <Col md="12" xs="12" className="m-0">
          <Row>
            {/* TODO GET STORE FROM API */}
            <Col md="6" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('input_store')}
                name="store_id"
                options={Stores}
                required
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('membership_code')}
                name="m_code"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col md="6" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('input_discount')}
                name="amount"
                required
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('amount_type')}
                name="amount_type"
                options={AmountType}
              />
            </Col>
          </Row>

          <Row>
            <Col md="6" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('status')}
                name="published"
                options={Code.Status}
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('calculation_point')}
                name="calculation_point"
                options={CalculationPoint}
              />
            </Col>
          </Row>

          <Row>
            <Col md="6" xs="12" className="m-0">
              <FormGroupDateTimeInputItem
                label={t('label_memebership_datestart')}
                name="effective_start"
                required
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupDateTimeInputItem
                label={t('label_memebership_dateend')}
                name="effective_end"
                required
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(BasicInformation);
