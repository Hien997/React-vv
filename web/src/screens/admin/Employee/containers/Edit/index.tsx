import React, { useCallback, useEffect, useMemo } from 'react';

import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useMemoSelector } from 'src/hooks';
import EditView from '../../views/Edit';
import {
  employeeActions,
  employeeSelectors,
} from '../../../../../state/ducks/employee';
import { Employee } from '../../../../../state/models/employee';
import { validationSchema, validate } from './validation';

export type EmployeeEditProps = {
  id?: string;
  onCancel: any;
  onSave: any;
};

const EmployeeEdit: React.FC<EmployeeEditProps> = ({ id, ...props }) => {
  const { t } = useTranslation(['message', 'employee']);
  const dispatch = useDispatch();

  const response = useMemoSelector(employeeSelectors.getEmployeeDetails);

  const getEmployeeDetails = useCallback(
    (empId: string) => {
      dispatch(employeeActions.getEmployeeDetails.request(empId));
    },
    [dispatch]
  );

  const createEmployee = useCallback(
    (employee: Employee) => {
      dispatch(employeeActions.createEmployee.request(employee));
    },
    [dispatch]
  );

  const updateEmployee = useCallback(
    (employee: Employee) => {
      dispatch(employeeActions.updateEmployee.request(employee));
    },
    [dispatch]
  );

  useEffect(() => {
    if (id) {
      getEmployeeDetails(id);
    }
  }, [getEmployeeDetails, id]);

  const onSave = (employee: Employee) => {
    if (!id) {
      createEmployee(employee);
    } else {
      employee.id = id;
      updateEmployee(employee);
    }
    // props.onSave(employee);
  };

  const onCancel = () => {
    props.onCancel();
  };

  const edittingData = useMemo(() => {
    return id && response ? response.data : undefined;
  }, [id, response]);

  return (
    <>
      <EditView
        data={edittingData}
        onSave={onSave}
        onCancel={onCancel}
        validate={validate(validationSchema, t)}
      />
    </>
  );
};

export default EmployeeEdit;
