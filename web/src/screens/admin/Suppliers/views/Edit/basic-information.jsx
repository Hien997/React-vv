import React from 'react';
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import {
  FormGroupInputItem,
  FormGroupTextAreaItem,
} from '../../../../../components/admin/Form/FormGroup';
import { SelectCountryInputItem } from '../../../../../components/admin/Form/SelectCountryInputItem';
import { SelectStoreInputItem } from '../../../../../components/admin/Form/SelectStoreInputItem';

const BasicInformation = () => {
  const { t } = useTranslation('supplier');

  return (
    <>
      <Row>
        <Col md="6" xs="12" className="m-0">
          <FormGroupInputItem label={t('company_name')} name="company_name" />
        </Col>

        <Col md="6" xs="12" className="m-0">
          <SelectStoreInputItem label={t('store')} name="store_id" />
        </Col>
      </Row>

      <Row>
        <Col md="6" xs="12" className="m-0">
          <FormGroupInputItem label={t('address')} name="address" />
        </Col>

        <Col md="6" xs="12" className="m-0">
          <FormGroupInputItem label={t('city')} name="city" />
        </Col>
      </Row>

      <Row>
        <Col md="6" xs="12" className="m-0">
          <FormGroupInputItem label={t('state')} name="state" />
        </Col>

        <Col md="6" xs="12" className="m-0">
          <FormGroupInputItem label={t('zipcode')} name="zip" />
        </Col>
      </Row>

      <Row>
        <Col md="6" xs="12" className="m-0">
          <FormGroupInputItem label={t('telephone')} name="telephone" />
        </Col>
        <Col md="6" xs="12" className="m-0">
          <SelectCountryInputItem label={t('country')} name="country_id" />
        </Col>
      </Row>
      <Row>
        <Col md="6" xs="12" className="m-0">
          <FormGroupInputItem label={t('account_no')} name="account_no" />
        </Col>
        <Col md="6" xs="12" className="m-0">
          <FormGroupInputItem label={t('email')} name="email" />
        </Col>
      </Row>
      <Row>
        <Col md="12" xs="12" className="m-0">
          <FormGroupTextAreaItem label={t('comment')} name="comment" />
        </Col>
      </Row>
    </>
  );
};

export default BasicInformation;
