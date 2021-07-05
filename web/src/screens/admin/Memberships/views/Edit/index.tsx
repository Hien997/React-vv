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
import { useTranslation } from 'react-i18next';
import { useFormik, FormikProvider } from 'formik';
import { useMemoSelector } from 'src/hooks';
import { selectors } from '../../../../../state/ducks/membership';
import './Edit.css';
import BasicInformation from './membership-information';
import { defaultValues } from './util';

export type EditViewProps = {
  onSave?: any;
  onCancel: any;
  validate?: any;
  id?: string;
};

const EditView: React.FC<EditViewProps> = ({ validate, id, ...props }) => {
  const { t } = useTranslation('membership');

  const data = useMemoSelector(selectors.getDetailMembership)?.data;

  const initialValues = useMemo(() => {
    const effectiveStart = data?.effective_start
      .substr(0, 16)
      .replace(' ', 'T');
    const effectiveEnd = data?.effective_end.substr(0, 16).replace(' ', 'T');

    return id
      ? {
          ...defaultValues,
          ...data,
          effective_start: effectiveStart,
          effective_end: effectiveEnd,
        }
      : { ...defaultValues };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <strong>{id ? `${t('title_edit')}` : t('add_new_title')}</strong>
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
                  <BasicInformation />
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
            {t('employee:cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default React.memo(EditView);
