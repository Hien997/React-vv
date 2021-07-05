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
  Collapse,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useFormik, FormikProvider } from 'formik';
import { FormGroupInputItem } from 'src/components/admin/Form/FormGroup';
import { SelectStoreInputItem } from 'src/components/admin/Form/SelectStoreInputItem';

export type ConditionProps = {
  onSearch?: any;
  onClear?: any;
};

const Condition: React.FC<ConditionProps> = ({ ...props }) => {
  const { t } = useTranslation('supplier');
  const [collapseConditions, setCollapseConditions] = useState(false);
  const [initdata, setInitData] = useState({});

  const toggleCondtions = () => {
    setCollapseConditions((prev) => !prev);
  };

  const onSubmit = (values: any) => {
    props.onSearch(values);
  };

  const onReset = (values: any) => {
    props.onClear();
    setInitData(values);
  };

  const formikBag = useFormik({
    enableReinitialize: true,
    initialValues: initdata,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit,
    onReset,
  });

  return (
    <div className="animated">
      <Card>
        <CardHeader>
          <i className="icon-menu" />
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
        <FormikProvider value={formikBag}>
          <Form
            onReset={formikBag.handleReset}
            onSubmit={formikBag.handleSubmit}
            noValidate
            name="simpleForm"
          >
            <CardBody>
              <Row>
                <Col md={4} xs={12}>
                  <FormGroupInputItem label={t('keyword')} name="q" />
                </Col>
                <Col md={4} xs={12}>
                  <SelectStoreInputItem label={t('store')} name="store_id" />
                </Col>
              </Row>
              <Collapse isOpen={collapseConditions} id="collapseCondtions" />
            </CardBody>
            <CardFooter className="text-center">
              <Button type="submit" size="lg" color="primary" className="mx-2">
                <i className="fa fa-search" /> {t('search')}
              </Button>
              <Button type="reset" size="lg" color="secondary" className="mx-2">
                <i className="fa fa-ban" /> {t('reset')}
              </Button>
            </CardFooter>
          </Form>
        </FormikProvider>
      </Card>
    </div>
  );
};

export default Condition;
