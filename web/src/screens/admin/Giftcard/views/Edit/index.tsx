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

import './Edit.css';
import { useTranslation } from 'react-i18next';
import { Giftcard } from '../../../../../state/models/giftcard';
import GiftcardInformation from './giftcardInformation';
import { getDate } from './utils';

const defaultValues = {
  user_id: '',
  store_id: '',
  giftcard_number: '',
  value: '',
  value_use: '0',
  effective_start: getDate(false),
  effective_end: getDate(true),
  balance: '',
  published: '',
};

export type EditViewProps = {
  data?: Giftcard;
  onSave?: any;
  onCancel: any;
  validate?: any;
  id?: string;
};

const EditView: React.FC<EditViewProps> = ({ data, validate, ...props }) => {
  const { t } = useTranslation('giftcard');

  const initialValues = useMemo(() => {
    if (!props.id) return { ...defaultValues };

    return { ...defaultValues, ...data };
  }, [data, props.id]);

  const onSubmit = (values: any) => {
    props.onSave(values);
  };

  const onCancel = () => {
    props.onCancel();
  };

  const onBlurGiftCardNumber = (value: any) => {
    const giftcardNumber = value.replace(/[^A-Z0-9]+/g, '');
    formikBag.setFieldValue('giftcard_number', giftcardNumber, true);
    formikBag.setFieldTouched('giftcard_number', true, true);
  };

  const formikBag = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    enableReinitialize: true,
    validate,
    onSubmit,
  });

  return (
    <div className="animated">
      <Modal isOpen={true} size="lg">
        <ModalHeader>
          <i className="icon-note" />
          <strong>
            {props.id
              ? t('giftcard:giftcards_update')
              : t('giftcard:giftcards_new')}
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
                  <GiftcardInformation
                    id={props.id}
                    onBlurGiftcardNumber={onBlurGiftCardNumber}
                    formikBag={formikBag}
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
            disabled={formikBag.isSubmitting}
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
            {t('giftcard:cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default React.memo(EditView);
