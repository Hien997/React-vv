import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Col,
  Form,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from 'reactstrap';
import { useFormik, FormikProvider } from 'formik';
import { FormGroupInputItem } from '../../../../../components/admin/Form/FormGroup';
import { defaultValues } from './util';
import { SelectType } from '../../containers/Option/types';
import { selectors } from '../../../../../state/ducks/service';
import ColorPicker from './ColorPicker';
import './styles.css';
import { Service } from '../../../../../state/models/service';
import { ServiceCreateRequest } from '../../../../../state/api-models/service';
import { useMemoSelector } from 'src/hooks';
import { validationSchema } from '../../containers/Option/validate';

export type Props = {
  onCancelOption: Function;
  data?: Service;
  updateService: Function;
};

const OptionView: React.FC<Props> = ({
  onCancelOption,
  data,
  updateService,
}) => {
  const { t } = useTranslation('service');

  const [selectType, setSelectType] = useState(SelectType.None);

  const statusUpdate = useMemoSelector(selectors.getServiceUpdate).loading;

  const initialValues = useMemo(() => {
    return { ...defaultValues, ...data };
  }, []);

  const onSubmit = () => {
    const {
      bg_color,
      delay_time,
      finish_time,
      font_color,
      red_time,
      yellow_time,
    } = formikBag.values;
    const request: ServiceCreateRequest = {
      bg_color,
      font_color,
      red_time: Number(red_time),
      yellow_time: Number(yellow_time),
      delay_time: Number(delay_time),
      finish_time: Number(finish_time),
      id: data?.id,
    };
    updateService(request);
  };

  const formikBag = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  const onSelectColor = (type: SelectType) => {
    setSelectType(type);
  };

  const onChangeColor = (color: string) => {
    formikBag.setFieldValue(
      selectType === SelectType.BgColor ? 'bg_color' : 'font_color',
      color
    );
  };

  const onCancel = () => {
    onCancelOption();
  };

  const props = {
    type: selectType,
    onChangeColor: onChangeColor,
    color:
      selectType === SelectType.BgColor
        ? formikBag.values.bg_color
        : formikBag.values.font_color,
  };

  return (
    <>
      <div className="animated">
        <Modal isOpen={true} size="lg">
          <ModalHeader>
            <i className="icon-note" />
            <strong>{t('service:service_option')}</strong>
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
                    <Row>
                      <Col md="6" xs="6" className="m-0">
                        <FormGroupInputItem
                          label={t('service:red_time')}
                          name="red_time"
                        />
                      </Col>
                      <Col md="6" xs="6" className="m-0">
                        <FormGroupInputItem
                          label={t('service:yellow_time')}
                          name="yellow_time"
                        />
                      </Col>
                      <Col md="6" xs="6" className="m-0">
                        <FormGroupInputItem
                          label={t('service:delay_time')}
                          name="delay_time"
                        />
                      </Col>
                      <Col md="6" xs="6" className="m-0">
                        <FormGroupInputItem
                          label={t('service:finish_time')}
                          name="finish_time"
                        />
                      </Col>
                      <Col md="6" xs="6">
                        <div className="d-none">
                          <FormGroupInputItem
                            label={t('service:btn_color')}
                            name="bg_color"
                          />
                        </div>
                        <Label>{t('service:btn_color')}</Label>
                        <br />
                        <div
                          className="btn-color-option"
                          style={{ background: formikBag.values.bg_color }}
                          onClick={() => onSelectColor(SelectType.BgColor)}
                        />
                      </Col>
                      <Col md="6" xs="6">
                        <div className="d-none">
                          <FormGroupInputItem
                            label={t('service:font_color')}
                            name="font_color"
                          />
                        </div>
                        <Label>{t('service:font_color')}</Label>
                        <br />
                        <div
                          className="btn-color-option"
                          style={{ background: formikBag.values.font_color }}
                          onClick={() => onSelectColor(SelectType.FontColor)}
                        />
                      </Col>
                      <Col md="6" xs="6" className="m-0" />
                      {(selectType === SelectType.BgColor ||
                        selectType === SelectType.FontColor) && (
                        <ColorPicker {...props} />
                      )}
                    </Row>
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
              disabled={statusUpdate || !formikBag.isValid}
              onClick={formikBag.submitForm}
            >
              {statusUpdate ? 'Wait ...' : 'Save Changes'}
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
    </>
  );
};
export default React.memo(OptionView);
