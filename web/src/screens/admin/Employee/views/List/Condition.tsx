import React from 'react';
import { Form, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useFormik, FormikProvider } from 'formik';
import {
  FormGroupSelectCodeInputItem,
  FormGroupInputItem,
  FormGroupSelectInputItem,
} from '../../../../../components/admin/Form/FormGroup';
import { Code } from '../../../../../config/code';
import { SearchCondition } from '../../../../../components/admin/search';

export type ConditionProps = {
  onSearch?: any;
  onClear?: any;
};

const Condition: React.FC<ConditionProps> = ({ ...props }) => {
  const { t } = useTranslation('employee');

  const onSearch = () => {
    formikBag.submitForm();
  };

  const onClear = () => {
    formikBag.resetForm();
  };

  const onSubmit = (values: any) => {
    props.onSearch(values);
  };

  const formikBag = useFormik({
    initialValues: {},
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit,
  });

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
                  <FormGroupSelectCodeInputItem
                    label={t('employee:store')}
                    name="store_id"
                    codeName="stores"
                  />
                </Col>
                <Col md="4">
                  <FormGroupSelectCodeInputItem
                    label={t('employee:group')}
                    name="role_id"
                    codeName="roles"
                  />
                </Col>
                <Col md="4">
                  <FormGroupSelectInputItem
                    label={t('employee:status')}
                    name="published"
                    options={Code.Status}
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
                    label={t('employee:name')}
                    name="full_name"
                  />
                </Col>
                <Col md="4">
                  <FormGroupInputItem
                    label={t('employee:email')}
                    name="email"
                  />
                </Col>
                <Col md="4">
                  <FormGroupInputItem
                    label={t('employee:phone')}
                    name="phone"
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
