import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  CardFooter,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useFormik, FormikProvider } from 'formik';
import {
  FormGroupSelectInputItem, FormGroupInputItem,
} from '../../../../../components/admin/Form/FormGroup';

export type ConditionProps = {
  onSearch?: any;
  onClear?: any;
};

const Categories = [
  { value: 'c3ec8062-b8e5-11ea-b3de-0242ac130034', label: 'Add-On Services' },
  { value: 'c3ec8062-b8e5-11ea-b3de-0242ac130035', label: 'Any Product' },
  { value: 'c3ec8062-b8e5-11ea-b3de-0242ac130036', label: 'Waxing' }
]

const Supplier = [
  { value: '0', label: 'None' },
  { value: '1', label: 'Test' },
]

const Status = [
  { value: '0', label: 'Enable' },
  { value: '1', label: 'Disable' },
]

const Condition: React.FC<ConditionProps> = ({ ...props }) => {
  const { t } = useTranslation('service');

  const [collapseConditions, setCollapseConditions] = useState(false);

  const toggleCondtions = () => {
    setCollapseConditions((prev) => !prev);
  };

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
    <div className="animated">
      <Card>
        <CardHeader>
          <i className="fa fa-filter" />
          {t('conditions')} <div className="card-header-actions" />
          <div className="card-header-actions">
            <Button
              color="link"
              className="card-header-action btn-minimize"
              data-target="#collapseCondtions"
              onClick={toggleCondtions}
            >
              {collapseConditions ? (
                <i className="icon-arrow-up" />
              ) : (
                  <i className="icon-arrow-down" />
                )}
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <FormikProvider value={formikBag}>
            <Form
              onSubmit={formikBag.handleSubmit}
              noValidate
              name="simpleForm"
            >
              <Row>
                {/* TODO CALL API  */}
                <Col md="3">
                  <FormGroupSelectInputItem
                    label={t('service:category')}
                    name="store_id"
                    options={Categories}
                  />
                </Col>
                <Col md="3">
                  <FormGroupSelectInputItem
                    label={t('service:supplier')}
                    name="supplier_id"
                    options={Supplier}
                  />
                </Col>
                <Col md="3">
                  <FormGroupSelectInputItem
                    label={t('service:status')}
                    name="published"
                    options={Status}
                  />
                </Col>
                <Col md="3">
                  <FormGroupInputItem
                    label={t('service:search')}
                    name="published"
                  />
                </Col>
              </Row>
            </Form>
          </FormikProvider>
        </CardBody>
        <CardFooter className="text-center">
          <Button
            type="button"
            size="lg"
            color="primary"
            className="mx-2"
            onClick={onSearch}
          >
            <i className="fa fa-search" /> {t('service:search')}
          </Button>
          <Button
            type="button"
            size="lg"
            color="secondary"
            className="mx-2"
            onClick={onClear}
          >
            <i className="fa fa-close" /> {t('service:reset')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Condition;
