import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ImportView from '../../views/Import';
import { employeeActions } from '../../../../../state/ducks/employee';
import { EmployeeImportRequest } from '../../../../../state/api-models/employee';

export type EmployeeImportProps = {
  onCancel: Function;
  onImport: Function;
};

const EmployeeImport: React.FC<EmployeeImportProps> = (props) => {
  const dispatch = useDispatch();

  const onImport = useCallback(
    (file: File) => {
      const request: EmployeeImportRequest = {
        file,
      };
      dispatch(employeeActions.importEmployee.request(request));
    },
    [dispatch]
  );

  const importProps = {
    ...props,
    onImport,
  };

  return <ImportView {...importProps} />;
};
export default React.memo(EmployeeImport);
