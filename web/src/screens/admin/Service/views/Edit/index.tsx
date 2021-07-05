import React, { useMemo } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useFormik, FormikProvider } from 'formik';
import { useTranslation } from 'react-i18next';
import './Edit.css';
import { selectors } from '../../../../../state/ducks/service';
import { Service } from '../../../../../state/models/service';
import BasicInformation from './basic-information';
import { defaultValues } from './util';
import { ServiceCreateRequest } from '../../../../../state/api-models/service';
import { useMemoSelector } from 'src/hooks';

export type EditViewProps = {
  data?: Service;
  onSave: Function;
  onCancel: any;
  validate?: any;
  id?: string;
};

const EditView: React.FC<EditViewProps> = ({
  data,
  validate,
  id,
  onSave,
  ...props
}) => {
  const { t } = useTranslation('service');

  const statusCreate = useMemoSelector(selectors.getServiceCreate).loading;
  const statusUpdate = useMemoSelector(selectors.getServiceUpdate).loading;

  const initialValues = useMemo(() => {
    return id
      ? { ...defaultValues, code: data?.sku, ...data }
      : { ...defaultValues };
  }, [data]);

  const onSubmit = (values: any) => {
    const request: ServiceCreateRequest = {
      allow_alt_description: values.allow_alt_description,
      category_id: values.category_id,
      cost_price: Number(values.unit_price),
      supply_price: Number(values.supply_price),
      deductible_amount: Number(values.deductible_amount),
      deductible_amount_type: Number(values.deductible_amount_type),
      name: values.name,
      number_turn: Number(values.number_turn),
      ordering: Number(values.ordering),
      published: values.active ? 0 : 1,
      short_name: values.short_name,
      sku: values.code,
      store_id: 'c3ec8062-b8e5-11ea-b3de-0242ac130034',
      supplier_id: values.supplier_id,
      unit_price: Number(values.unit_price),
      unit_type: Number(values.unit_type),
      user_id: 'd213e69c-d1a1-11ea-87d0-0242ac130003',
    };
    onSave(request);
  };

  const onCancel = () => {
    props.onCancel();
  };

  const formikBag = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    enableReinitialize: true,
    validate,
    onSubmit,
  });

  const handleChangeSortName = (value: any) => {
    var matches: any = value.match(/\b(\w)/g);
    var sortName = matches ? matches.join('') : '';
    formikBag.setFieldValue('short_name', sortName, true);
    formikBag.setFieldTouched('name', true, true);
  };

  return (
    <div className="animated">
      <Modal isOpen={true} size="xl">
        <ModalHeader>
          <i className="icon-note" />
          <strong>
            {id ? `${t('service:edit_service')}` : t('service:new_service')}
          </strong>
        </ModalHeader>
        <ModalBody>
          <FormikProvider value={formikBag}>
            <Form
              onSubmit={formikBag.handleSubmit}
              noValidate
              name="simpleForm"
            >
              <Row>
                <Col xs="12" md="12" className="mb-4">
                  <BasicInformation
                    handleChangeSortName={handleChangeSortName}
                  />
                </Col>
              </Row>
            </Form>
          </FormikProvider>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="primary"
            className="mr-1"
            disabled={statusCreate || statusUpdate || !formikBag.isValid}
            onClick={formikBag.submitForm}
          >
            {id
              ? statusUpdate
                ? 'Wait...'
                : 'Save Changes'
              : statusCreate
              ? 'Wait...'
              : 'Create'}
          </Button>
          <Button
            type="reset"
            color="secondary"
            className="mr-1"
            onClick={onCancel}
          >
            {t('employee:cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditView;
