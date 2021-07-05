import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useFormik, FormikProvider } from 'formik';
import {
  FormGroupInputItem,
} from '../../../../../components/admin/Form/FormGroup';

export type ConditionProps = {
  onSearch?: any;
  onClear?: any;
};

const Condition: React.FC<ConditionProps> = ({ ...props }) => {
  const { t } = useTranslation('membership');

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

  const initValue = {
    m_code: ''
  };

  const formikBag = useFormik({
    initialValues: initValue,
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
              {collapseConditions ?
                <i className="icon-arrow-up" />
                :
                <i className="icon-arrow-down" />}
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <FormikProvider value={formikBag}>
            <Row>
              <Col md="2">
                <FormGroupInputItem
                  label={t('membership_code')}
                  name="m_code"
                />
              </Col>
            </Row>
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
            <i className="fa fa-search" /> {t('search')}
          </Button>
          <Button
            type="button"
            size="lg"
            color="secondary"
            className="mx-2"
            onClick={onClear}
          >
            <i className="fa fa-close" /> {t('reset')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default React.memo(Condition);
