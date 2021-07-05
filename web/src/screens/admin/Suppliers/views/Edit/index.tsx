import React, { useMemo } from 'react';
import {
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useFormik, FormikProvider } from 'formik';

import './Edit.css';
import { useTranslation } from 'react-i18next';
import { Supplier } from 'src/state/models/supplier';
import BasicInformation from './basic-information';

const defaultValues = {
  first_name: '',
  last_name: '',
  user_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  accept: false,
};

export type EditViewProps = {
  data?: Supplier;
  onSave?: any;
  onCancel: any;
  validate?: any;
};

const EditView: React.FC<EditViewProps> = ({ data, validate, ...props }) => {
  const { t } = useTranslation('supplier');

  const initialValues = useMemo(() => {
    return { ...defaultValues, ...data };
  }, [data]);

  const onSubmit = (values: any) => {
    props.onSave(values);
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

  return (
    <div className="animated">
      <Modal isOpen={true} size="lg">
        <ModalHeader>
          <i className="icon-note" />
          <strong>
            {data
              ? `${t('supplier:edit:')} ${data.id}`
              : t('supplier:new')}
          </strong>
        </ModalHeader>
        <ModalBody>
          <FormikProvider value={formikBag}>
            <Form
              onSubmit={formikBag.handleSubmit}
              noValidate
              name="simpleForm"
            >
              <BasicInformation />
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
            {formikBag.isSubmitting ? t('supplier:wait') : t('supplier:save')}
          </Button>
          <Button
            type="reset"
            color="secondary"
            className="mr-1"
            onClick={onCancel}
          >
            {t('supplier:cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditView;
