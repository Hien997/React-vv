import React, { useEffect, useCallback } from 'react';
import { Row, Col, Label } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { useMemoSelector } from 'src/hooks';
import {
  FormGroupInputItem,
  FormGroupSelectInputItem,
} from '../../../../../components/admin/Form/FormGroup';
import './Edit.css';
import { MemberShipListRequest } from '../../../../../state/api-models/membership';
import { Code } from '../../../../../config/code';
import {
  customerActions,
  customerSelectors,
} from '../../../../../state/ducks/customer';

const MemberShipComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('customer');
  const { values } = useFormikContext();

  const response = useMemoSelector(customerSelectors.getCustomerList);

  const getCustomerList = (request: any) => {
    dispatch(customerActions.getCustomerList.request(request));
  };

  useEffect(() => {
    if ((values as any).membership_number) {
      const request: MemberShipListRequest = {
        filter: { membership_number: (values as any).membership_number },
      };
      getCustomerList(request);
    }
  }, [(values as any).membership_number]);

  return (
    <Row>
      <Col md="6" xs="12" className="m-0">
        <FormGroupInputItem
          label={t('customers_membershipNumber')}
          name="membership_number"
        />
      </Col>
      {response &&
      response.data &&
      response.data.customers &&
      (values as any).membership_number ? (
        <>
          {response.data.customers.length === 0 ? (
            <>
              <Col md="3" className="m-0">
                <FormGroupInputItem
                  label={t('customers_discount')}
                  name="discount"
                />
              </Col>
              <Col md="6" xs="12" className="m-0">
                <FormGroupSelectInputItem
                  label={t('customers_amount_type')}
                  name="amount_type"
                  options={Code.AmountType}
                />
              </Col>
              <Col md="6" xs="12" className="m-0">
                <FormGroupSelectInputItem
                  label={t('customers_published')}
                  name="published"
                  options={Code.Status}
                />
              </Col>
              <Col>
                <Label className="isNotUse">
                  {t('customer_infor1', {
                    m_code: (values as any).membership_number,
                  })}
                </Label>
              </Col>
            </>
          ) : (
            <Col>
              <Label
                className={
                  response.data.customers[0].email === (values as any).email
                    ? 'itSeft'
                    : 'isUse'
                }
              >
                {t('customer_infor2', {
                  name: `${response.data.customers[0].full_name}`,
                })}
              </Label>
            </Col>
          )}
        </>
      ) : (
        <></>
      )}
    </Row>
  );
};

export default MemberShipComponent;
