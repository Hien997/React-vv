import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Label } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { getDefaultPolicies, mergePolicies } from 'src/guards';
import { useField, useFormikContext } from 'formik';
import { Policy } from 'src/guards/type';
import { Employee } from '../../../../../state/models/employee';
import {
  FormGroupCheckboxItem,
  // FormGroupDropdownTreeSelect,
  FormGroupMultiSelectCodeInputItem,
  FormGroupSelectCodeInputItem,
} from '../../../../../components/admin/Form/FormGroup';
// import { Code } from '../../../../../config/code';
import { FormGroupSwitcherItem } from '../../../../../components/admin/Form/FormGroup/form-group-switcher';

export type EmployeeEditViewProps = {
  data: Employee;
  onSubmit?: any;
  validate?: any;
};

const PermissionGroup = () => {
  const { setFieldValue } = useFormikContext();
  const [, roleMeta] = useField('role_id');
  const { t } = useTranslation('employee');
  const [rolePolicies, setRolePolicies] = useState([]);

  useEffect(() => {
    if (roleMeta.value) {
      const defaultPolicies = getDefaultPolicies(roleMeta.value);
      setRolePolicies(defaultPolicies);
    }
  }, [roleMeta.value]);

  const handleRoleChange = (value: string) => {
    const policies = getDefaultPolicies(value);
    setFieldValue('modules', policies, false);

    setRolePolicies(policies);
  };

  return (
    <>
      <Row>
        <Col md="6" sm="12">
          <Card>
            <CardHeader>{t('Services')}</CardHeader>
            <CardBody>
              <div className="ml-4">
                <FormGroupCheckboxItem
                  label="Full services"
                  name="employee.active_full_services"
                  id="active_full_services"
                />
              </div>

              <FormGroupMultiSelectCodeInputItem
                label="Service per employee"
                name="services"
                codeName="services"
                required
              />

              {/* <FormGroupDropdownTreeSelect
                label="Service per employee:"
                name="services"
                multiple
                options={Code.Services}
              /> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" sm="12">
          <Card>
            <CardHeader>{t('Permissions')}</CardHeader>
            <CardBody>
              <FormGroupSelectCodeInputItem
                label="Group"
                placeholder="Select..."
                name="role_id"
                codeName="roles"
                required
                onChange={handleRoleChange}
              />

              <Row className="m-3">
                {rolePolicies &&
                  rolePolicies.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Col md="6" key={`modules[${index}]`}>
                      <Row>
                        <Label className="font-weight-bold">{item.label}</Label>
                      </Row>
                      <Row>
                        <Col md="5">
                          <FormGroupSwitcherItem
                            name={`modules[${index}].is_readable`}
                            // eslint-disable-next-line react/no-array-index-key
                            key={`modules-${index}-is_readable`}
                            id={`modules-${index}-is_readable`}
                            disabled={!item.can_set_readable}
                            label="Read"
                          />
                        </Col>
                        <Col md="5">
                          <FormGroupSwitcherItem
                            name={`modules[${index}].is_writable`}
                            // eslint-disable-next-line react/no-array-index-key
                            key={`modules-${index}-is_writable`}
                            id={`modules-${index}-is_writable`}
                            disabled={!item.can_set_writable}
                            label="Write"
                          />
                        </Col>
                      </Row>
                    </Col>
                  ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PermissionGroup;
