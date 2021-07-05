import React, { useState, useMemo } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  CardFooter,
  Button,
  Row,
  Col,
  Collapse,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useFormik, FormikProvider } from 'formik';
import { useMemoSelector } from 'src/hooks';

import {
  FormGroupSelectInputItem,
  FormGroupInputItem,
  FormGroupDateInputRange,
} from '../../../../../components/admin/Form/FormGroup';
import { Code } from '../../../../../config/code';

import { customersGroupSelectors } from '../../../../../state/ducks/customersGroup';
import { CustomersGroup } from '../../../../../state/models/customer';
import { getDateFromCode } from '../../../../../config/utils';
import { SearchCondition } from '../../../../../components/admin/search';

export type ConditionProps = {
  onSearch?: any;
  onClear?: any;
};

const Condition: React.FC<ConditionProps> = ({ ...props }) => {
  const { t } = useTranslation('customer');
  const [initdata, setInitData] = useState({});
  const responseGroup = useMemoSelector(
    customersGroupSelectors.getcustomersGroupList
  );
  const dataGroup = useMemo(() => {
    let data: CustomersGroup[] = [];
    if (responseGroup && responseGroup.data) {
      data = responseGroup.data.customersGroup;
    }
    const group =
      data &&
      data.map((dataDisplay: CustomersGroup) => {
        return {
          value: dataDisplay.id,
          label: dataDisplay.group_name,
        };
      });

    // group.unshift({ value: '', label: 'Please Select' });
    return group;
  }, [responseGroup]);

  const onSubmit = (values: any) => {
    const data = {
      ...values,
      quickDate: getDateFromCode(values.quickDate),
    };
    props.onSearch(data);
  };

  // const onReset = () => {
  //   setInitData({});
  // };

  const formikBag = useFormik({
    enableReinitialize: true,
    initialValues: initdata,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit,
  });

  const onSearch = () => {
    formikBag.submitForm();
  };

  const onClear = () => {
    formikBag.resetForm();
  };

  return (
    <FormikProvider value={formikBag}>
      <Form onSubmit={formikBag.handleSubmit} noValidate name="simpleForm">
        <SearchCondition
          onClear={onClear}
          onSearch={onSearch}
          basicCondition={
            <>
              <Row>
                <Col md="4">
                  <FormGroupSelectInputItem
                    label={t('customers_group')}
                    name="outlined-select-group"
                    options={dataGroup}
                    helperText="Please select your group"
                    className="customer-texfield-select"
                  />
                </Col>
                <Col md="4">
                  <FormGroupSelectInputItem
                    label={t('customers_quickDate')}
                    name="quickDate"
                    options={Code.QuickDate}
                    helperText="Please select date"
                    className="customer-texfield-select"
                  />
                </Col>
                <Col md="4">
                  <FormGroupSelectInputItem
                    label={t('customers_optionBy')}
                    name="optionBy"
                    options={Code.OptionByCustomer}
                    helperText="Please select option"
                    className="customer-texfield-select"
                  />
                </Col>
              </Row>
            </>
          }
          advancedCondition={
            <>
              <Row>
                <Col md="4">
                  <FormGroupInputItem
                    label={t('customers_fullName')}
                    name="full_name"
                    variant="outlined"
                    className="customer-texfield-input"
                  />
                </Col>
                <Col md="4">
                  <FormGroupInputItem
                    label={t('customers_cellPhone')}
                    name="cellphone"
                    variant="outlined"
                    className="customer-texfield-input"
                  />
                </Col>
                <Col md="4">
                  <FormGroupInputItem
                    label={t('customers_address')}
                    name="address"
                    variant="outlined"
                    className="customer-texfield-input"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="col-4">
                  <FormGroupDateInputRange
                    label={t('customers_birthday')}
                    name="birthday"
                  />
                </Col>
              </Row>
            </>
          }
        />
      </Form>
    </FormikProvider>
  );
};

export default Condition;
