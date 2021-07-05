import React from 'react';
import { Form, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useFormik, FormikProvider } from 'formik';
import {
  FormGroupSelectInputItem,
  FormGroupInputItem,
  FormGroupSelectCodeInputItem,
} from '../../../../../components/admin/Form/FormGroup';
import { Code } from '../../../../../config/code';
import { SearchCondition } from '../../../../../components/admin/search';

export type ConditionProps = {
  onSearch?: any;
  onClear?: any;
};

const Condition: React.FC<ConditionProps> = ({ ...props }) => {
  const { t } = useTranslation('giftcard');

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
                    label={t('giftcard:giftcards_store_info')}
                    name="store_id"
                    codeName="stores"
                  />
                </Col>
                <Col md="4">
                  <FormGroupSelectCodeInputItem
                    label={t('giftcard:giftcards_customer_name')}
                    name="user_id"
                    codeName="users"
                  />
                </Col>
                <Col md="4">
                  <FormGroupSelectInputItem
                    label={t('giftcard:giftcards_published')}
                    name="published"
                    options={Code.Published}
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
                    label={t('giftcard:giftcards_giftcard_number')}
                    name="giftcard_number"
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

export default React.memo(Condition);
