import React, { useState, useMemo } from 'react';
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
import { getDefaultPolicies, mergePolicies } from 'src/guards';
import { BaseEditView } from 'src/components/admin/edit';
import { Employee, initEmployee } from '../../../../../state/models/employee';
import BasicInformation from './basic-information';
import PermissionGroup from './service-permission';
import CalendarEmployee from './calendar-employee';
import CommissionPercent from './commission-percent';
import { ExtraInformation } from './extra-information';

export type EditViewProps = {
  data?: Employee;
  onSave?: any;
  onCancel: any;
  validate?: any;
};

const EditView: React.FC<EditViewProps> = ({ data, validate, ...props }) => {
  const { t } = useTranslation('employee');

  const [activeTab, setActiveTab] = useState('1');

  const initialValues = useMemo(() => {
    const employeeData = { ...initEmployee, ...data };
    if (employeeData.role_id) {
      const defaultPolicies = getDefaultPolicies(String(employeeData.role_id));
      const modules = mergePolicies(
        defaultPolicies,
        employeeData.modules as any
      );
      employeeData.modules = modules;
    }
    return employeeData;
  }, [data]);

  const toggle = (tab: string) => {
    setActiveTab(tab);
  };

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
      <BaseEditView
        modalProps={{ size: 'xl' }}
        title={
          data
            ? `${t('employee:edit_employee')} ${data.id}`
            : t('employee:add_new_employee')
        }
        isValidToSave={!formikBag.isSubmitting && formikBag.isValid}
        isSaving={formikBag.isSubmitting}
        btnSave={t('employee:save_changes')}
        btnCancel={t('employee:cancel')}
        onSave={() => {
          formikBag.submitForm();
        }}
        onCancel={onCancel}
      >
        <FormikProvider value={formikBag}>
          <Form onSubmit={formikBag.handleSubmit} noValidate name="simpleForm">
            <Row>
              <Col xs="12" md="12" className="mb-4">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      active={activeTab === '1'}
                      onClick={() => {
                        toggle('1');
                      }}
                    >
                      {t('employee:basic_information')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={activeTab === '2'}
                      onClick={() => {
                        toggle('2');
                      }}
                    >
                      {t('employee:commission_percent')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={activeTab === '3'}
                      onClick={() => {
                        toggle('3');
                      }}
                    >
                      {t('employee:permission_info')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={activeTab === '4'}
                      onClick={() => {
                        toggle('4');
                      }}
                    >
                      {t('employee:calendar')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={activeTab === '5'}
                      onClick={() => {
                        toggle('5');
                      }}
                    >
                      {t('employee:extra_info')}
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>

              <Col xs="12" md="12" className="mb-4">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <BasicInformation />
                  </TabPane>
                  <TabPane tabId="2">
                    <CommissionPercent />
                  </TabPane>
                  <TabPane tabId="3">
                    <PermissionGroup />
                  </TabPane>
                  <TabPane tabId="4">
                    <CalendarEmployee />
                  </TabPane>
                  <TabPane tabId="5">
                    <ExtraInformation />
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Form>
        </FormikProvider>
      </BaseEditView>
    </div>
  );
};

export default EditView;
