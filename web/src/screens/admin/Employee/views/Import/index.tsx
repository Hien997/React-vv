import { useFormikContext } from 'formik';
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Card,
  CardBody,
} from 'reactstrap';
import { BaseImportFailures } from 'src/components/admin/import';
import { useMemoSelector } from 'src/hooks';
import { isCsvFile } from 'src/utils/file';
import { employeeSelectors } from '../../../../../state/ducks/employee';

export type EmployeeImportViewProps = {
  onCancel: Function;
  onImport: Function;
};

const EmployeeImportView: React.FC<EmployeeImportViewProps> = ({
  onCancel,
  onImport,
}) => {
  const { t } = useTranslation(['employee', 'message']);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const importResponse = useMemoSelector(employeeSelectors.getEmployeeImport);
  const isImportLoading = useMemoSelector(employeeSelectors.isImportLoading);

  const isImportSuccess = React.useMemo(() => {
    return !isImportLoading && importResponse && importResponse.success;
  }, [importResponse, isImportLoading]);

  const failures = React.useMemo(() => {
    return (
      importResponse && importResponse.data && importResponse.data.failures
    );
  }, [importResponse]);

  const [fileName, setFileName] = useState('');

  const fileRef = useRef<any>();

  const selectFile = (e: any) => {
    const file: File = e.target.files[0];
    setFileName(file.name);
    if (isCsvFile(file.name)) {
      fileRef.current = file;
    }
  };

  const uploadFile = () => {
    setIsSubmitting(true);
    onImport(fileRef.current);
  };

  const onCancelImport = () => {
    onCancel();
  };

  const renderImportResult = () => {
    return (
      <>
        {isImportSuccess ? (
          <Alert color="success">{t('employee:successful_importinging')}</Alert>
        ) : (
          <>
            <Alert color="danger">{t('employee:failure_importing')}</Alert>
            <BaseImportFailures failures={failures} />
          </>
        )}
      </>
    );
  };

  return (
    <>
      <div className="animated">
        <Modal isOpen={true} size="lg">
          <ModalHeader>
            <i className="fa fa-upload" />
            <strong>{t('employee:import_employee')}</strong>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col xs="2" md="2" />
              <Col xs="8" md="8">
                <Card>
                  <CardBody>
                    <input id="file" type="file" onChange={selectFile} />
                    {fileName && !isCsvFile(fileName) && (
                      <p style={{ color: 'red' }}> {t('message:csv_file')}</p>
                    )}
                  </CardBody>
                </Card>
              </Col>
              <Col xs="2" md="2" />
            </Row>
            <Row>
              <Col xs="2" md="2" />
              <Col xs="8" md="8">
                {isSubmitting && (
                  <Card>
                    <CardBody>{renderImportResult()}</CardBody>
                  </Card>
                )}
              </Col>
              <Col xs="2" md="2" />
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              color="primary"
              className="mr-1"
              disabled={!fileName || !isCsvFile(fileName)}
              onClick={uploadFile}
            >
              Save
            </Button>
            <Button
              type="reset"
              color="secondary"
              className="mr-1"
              onClick={onCancelImport}
            >
              {t('employee:cancel')}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
export default React.memo(EmployeeImportView);
