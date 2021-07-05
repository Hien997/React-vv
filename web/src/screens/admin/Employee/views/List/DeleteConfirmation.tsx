import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export type DeleteConfirmationProps = {
  onOK?: any;
  onCancel?: any;
};

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  ...props
}) => {
  const { t } = useTranslation('employee');

  return (
    <div className="animated">
      <Modal isOpen={true} size="md">
        <ModalHeader>
          <i className="icon-trash" />
          <strong>{t('employee:confirm_delete_title')}</strong>
        </ModalHeader>
        <ModalBody>{t('employee:confirm_delete_msg')}</ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="danger"
            className="mr-1"
            onClick={props.onOK}
          >
            {t('employee:delete')}
          </Button>
          <Button
            type="reset"
            color="secondary"
            className="mr-1"
            onClick={props.onCancel}
          >
            {t('employee:cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteConfirmation;
