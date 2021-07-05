import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useFormik, FormikProvider } from 'formik';

import './Edit.css';
import { useTranslation } from 'react-i18next';
import { Customer } from '../../../../../state/models/customer';
import BasicInformation from './basic-information';
import { checkUndefined } from '../../utils';
import { getDate } from '../../../../../utils/date-time';

const defaultValues = {
  first_name: '',
  last_name: '',
  safety_box: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  homephone: '',
  cellphone: '',
  last_visit_date: '',
  birthday: '',
  anniversary: '',
  avatar_image: '',
  email: '',
  membership_number: '',
  point_balance: '',
  favorite: '',
  group_id: '',
};

export type EditViewProps = {
  data?: Customer;
  onSave?: any;
  onCancel: any;
  validate?: any;
};

const EditView: React.FC<EditViewProps> = ({ data, validate, ...props }) => {
  const { t } = useTranslation('customer');
  const initialValues = { ...defaultValues, ...data };
  const [activeTab, setActiveTab] = useState('1');
  const [file, setFile] = useState<any>();

  //
  const toggle = (tab: string) => {
    setActiveTab(tab);
  };

  const onSubmit = (values: any) => {
    const dataForm: FormData = new FormData();
    if (file) {
      dataForm.append('avatar', file);
    }
    const customerHistoriesPoints = values.point_action
      ? {
        func: 'Manual',
        item_id: '',
        action: values.point_action,
        point: values.point,
        cfg_point_to_amount: 0,
      }
      : undefined;

    const membership =
      values.membership_number && values.discount
        ? {
          m_code: values.membership_number,
          store_id: 'c3ec8062-b8e5-11ea-b3de-0242ac130034',
          amount: values.discount,
          amount_type: values.amount_type,
          calculation_point: true,
          effective_start: getDate(false),
          effective_end: getDate(true),
          published: values.published,
        }
        : undefined;

    const jsonData = JSON.stringify({
      store_id: checkUndefined(values.store_id),
      full_name: checkUndefined(values.full_name),
      safety_box: checkUndefined(values.safety_box),
      address: checkUndefined(values.address),
      city: checkUndefined(values.city),
      state: checkUndefined(values.state),
      zipcode: checkUndefined(values.zipcode),
      homephone: checkUndefined(values.homephone),
      cellphone: checkUndefined(values.cellphone),
      last_visit_date: checkUndefined(values.last_visit_date),
      birthday: checkUndefined(values.birthday),
      anniversary: checkUndefined(values.anniversary),
      avatar_image: checkUndefined(values.avatar_image),
      email: checkUndefined(values.email),
      membership_number: checkUndefined(values.membership_number),
      // eslint-disable-next-line no-nested-ternary
      point_balance: values.point_action
        ? values.point_action === '1'
          ? Number(values.point_balance) + Number(values.point)
          : Number(values.point_balance) - Number(values.point)
        : values.point_balance,
      favorite: checkUndefined(values.favorite),
      group_id: checkUndefined(values.group_id),
      notes: checkUndefined(values.notes),
      provider_phone: checkUndefined(values.provider_phone),
      customer_histories_points: customerHistoriesPoints,
      membership,
    });

    dataForm.append('data', jsonData);
    props.onSave(dataForm);
  };

  const onCancel = () => {
    props.onCancel();
  };

  const formikBag = useFormik({
    enableReinitialize: true,
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    validate,
    onSubmit,
  });

  return (
    <div className="animated">
      <Modal isOpen={true} size="xl">
        <ModalHeader>
          <i className="icon-note" />
          <strong>
            {data
              ? `${t('customers_update')} ${data.full_name}`
              : t('customers_add_new_title')}
          </strong>
        </ModalHeader>
        <ModalBody>
          <FormikProvider value={formikBag}>
            <Form onSubmit={formikBag.handleSubmit} noValidate name="simpleForm">
              <Row>
                <Col xs="12" md="12" className="mb-4">
                  <BasicInformation setFile={setFile} />
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
            disabled={formikBag.isSubmitting || !formikBag.isValid}
            onClick={formikBag.submitForm}
          >
            {formikBag.isSubmitting ? 'Wait...' : 'Save Changes'}
          </Button>
          <Button
            type="reset"
            color="secondary"
            className="mr-1"
            onClick={onCancel}
          >
            {t('Cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditView;
