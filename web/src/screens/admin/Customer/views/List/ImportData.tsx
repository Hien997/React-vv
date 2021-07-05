import React, { useState, useCallback, ChangeEvent, useRef } from 'react';
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardBody,
  Label,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './Edit.css';

export type ImportProps = {
  setShow: Function;
  setFile: Function;
  setSave: Function;
};

const ImportCustomers: React.FC<ImportProps> = ({ ...props }) => {
  const { t } = useTranslation(['customer', 'common']);
  const [fileName, setFileName] = useState<string>('');

  const uploadFile = useCallback(() => {
    document.getElementById('import_data').click();
  }, []);

  const onChangeFile = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileLocal = event.target.files[0];
      if (!fileLocal.name.toLowerCase().match(/\.(csv|CSV|txt|TXT)$/)) {
        toast.warn(t('customers_error_file_type'));
        return false;
      }
      if (fileLocal.size > 5120 * 1024) {
        toast.warn(t('customers_max_size'));
        return false;
      }
      props.setFile(fileLocal);
      setFileName(fileLocal.name);
    }
  }, []);

  const onDeleteFile = useCallback(() => {
    props.setFile(null);
    setFileName('');
  }, []);

  const onCancel = (showModal: boolean) => {
    props.setShow(showModal);
  };

  const onOk = (showModal: boolean) => {
    if (fileName) {
      props.setSave();
      setFileName('');
      props.setShow(showModal);
    } else {
      toast.warn(t('customers_select_file'));
    }
  };

  const containerStyle = {
    zIndex: 1999,
  };

  return (
    <Modal isOpen={true}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        style={containerStyle}
      />
      <ModalHeader>Import Data</ModalHeader>
      <ModalBody>
        <Row>
          <Col sm="5">
            <Label>{fileName}</Label>
            <input
              id="import_data"
              type="file"
              name="import_data"
              style={{ display: 'none' }}
              onChange={onChangeFile}
            />
          </Col>
          <Col xs="6" sm="4" md="3" xl="2">
            <Row col-md-4 ml-auto>
              {!fileName ? (
                <Button color="primary" onClick={uploadFile}>
                  {t('common:common_upload')}
                </Button>
              ) : (
                <Button color="primary" onClick={onDeleteFile}>
                  {t('common:common_delete')}
                </Button>
              )}
            </Row>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => onOk(false)}>
          OK
        </Button>
        <br />
        <Button color="secondary" onClick={() => onCancel(false)}>
          {t('common:common_cancel')}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ImportCustomers;
