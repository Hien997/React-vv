import React from 'react';
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import {
  FormGroupCheckboxItem,
  FormGroupInputItem,
  FormGroupSelectInputItem,
  FormGroupInputItemCustom
} from '../../../../../components/admin/Form/FormGroup';

const Service = [
  { value: '1', label: 'Add-On Services' },
  { value: '2', label: 'MISC SALE' },
  { value: '3', label: 'Nail Care' }
]

const AmountType = [
  { value: '1', label: 'Amount' },
  { value: '2', label: 'Percent(s)' }
]

const ActiveTurns = [
  { value: '0.5', label: '0.5 Turn' },
  { value: '1', label: '1 Turn' },
  { value: '1.5', label: '1.5 Turn' },
  { value: '2', label: '2 Turn' },
  { value: '2.5', label: '2.5 Turn' },
  { value: '3', label: '3 Turn' }
]

const Supplier = [
  { value: '0', label: 'None' },
  { value: '1', label: 'Test' },
]

type Props = { handleChangeSortName: Function }

const BasicInformation: React.FC<Props> = ({ handleChangeSortName }) => {
  const { t } = useTranslation('service');

  return (
    <>
      <Row>
        <Col md="6" xs="12" className="m-0" >
          <b>Item Information</b>
          <br />
          <Row>
            <Col md="10" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:store_share')}
                name="store_id"
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:code')}
                name="code"
              />
            </Col>
            <Col md="4" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:ordering')}
                name="ordering"
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupInputItemCustom
                label={t('service:item_name')}
                name="name"
                handleBlur={handleChangeSortName}
              />
            </Col>
            <Col md="4" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:short_name')}
                name="short_name"
              />
            </Col>
            <Col md="10" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('service:category')}
                name="category_id"
                options={Service}
              />
            </Col>
            <Col md="10" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('service:supplier')}
                name="supplier_id"
                options={Supplier}
              />
            </Col>
            <Col md="12" xs="12" className="m-0">
              <Row>
                <Col md="4" xs="4" className="m-0">
                  <div style={{ marginLeft: '20px' }}>
                    <FormGroupCheckboxItem
                      label={t('service:allow_alt_description')}
                      name="allow_alt_description"
                      id="allow_alt_description"
                    />
                  </div>
                </Col>
                {/* TODO req Item has Serial Number */}
                <Col md="4" xs="4" className="m-0">
                  <FormGroupCheckboxItem
                    label={t('service:active')}
                    name="active"
                    id="active"
                  />
                </Col>
              </Row>
            </Col>
            {/* TODO image */}
            {/* <Col md="10" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:image')}
                name="image"
                required
              />
            </Col> */}
          </Row>
        </Col>
        <Col xs="12" md="6">
          <b>Item Information</b>
          <Row>
            <Col md="6" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:supply_cost')}
                name="supply_price"
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:unit_price')}
                name="unit_price"
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:deductible_employee')}
                name="deductible_amount"
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('service:amount_type')}
                name="deductible_amount_type"
                options={AmountType}
              />
            </Col>
            {/* TODO req taxes */}
            <Col md="6" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:taxes')}
                name="taxes"
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('service:unit_type')}
                name="unit_type"
                options={Service}
              />
            </Col>
            {/* TODO req description */}
            <Col md="12" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('service:description')}
                name="description"
              />
            </Col>

            <Col md="6" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('service:active_turns')}
                name="number_turn"
                options={ActiveTurns}
              />
            </Col>

          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BasicInformation;
