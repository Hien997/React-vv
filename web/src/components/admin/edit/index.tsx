import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
} from 'reactstrap';

import { useTranslation } from 'react-i18next';

export type BaseEditViewProps = React.PropsWithChildren<{
  title: string;
  btnSave?: string;
  btnCancel?: string;
  isValidToSave?: boolean;
  isSaving?: boolean;
  onSave?: Function;
  onCancel: Function;
  modalProps: ModalProps;
}>;

export const BaseEditView: React.FC<BaseEditViewProps> = ({ ...props }) => {
  const { t } = useTranslation('common-edit');

  const onSave = (values: any) => {
    props.onSave(values);
  };

  const onCancel = () => {
    props.onCancel();
  };

  return (
    <div className="animated">
      <Modal {...props.modalProps} isOpen={true}>
        <ModalHeader>
          <i className="icon-note" />
          <strong>{props.title}</strong>
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="primary"
            className="mr-1"
            disabled={!props.isValidToSave}
            onClick={onSave}
          >
            {props.isSaving
              ? t('common-edit:saving')
              : props.btnSave || t('common-edit:save_changes')}
          </Button>
          <Button
            type="reset"
            color="secondary"
            className="mr-1"
            onClick={onCancel}
          >
            {props.btnCancel || t('common-edit:cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
