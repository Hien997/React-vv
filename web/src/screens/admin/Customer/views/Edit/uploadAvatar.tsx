import React, { useState, useCallback, ChangeEvent } from 'react';
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
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

import './Edit.css';
import CameraComponent from '../../../../../components/common/camera';
import { ToastContainer, toast } from 'react-toastify';

export type AvatarProps = {
  setShow: Function;
  setAvatar: Function;
  avatar: any;
  setFile: Function;
};

const UploadAvatar: React.FC<AvatarProps> = ({ ...props }) => {
  const { t } = useTranslation(['customer', 'common']);
  const [isShowCamera, setShowCamera] = useState(false);

  const uploadFile = useCallback(() => {
    document.getElementById('setup-profile-avatar').click();
  }, []);

  const onChangeAvatar = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileLocal = event.target.files[0];
      if (!fileLocal.name.toLowerCase().match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
        toast.warn(t('customers_error_file_type_image'));
        return false;
      }
      if (fileLocal.size > 5120 * 1024) {
        toast.warn(t('customers_max_size'));
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        props.setAvatar(e.target.result);
      };
      props.setFile(fileLocal);
      reader.readAsDataURL(event.target.files[0]);
    }
  }, []);

  const onDeleteAvatar = useCallback(() => {
    props.setFile(null);
    props.setAvatar(null);
  }, []);

  const onOpenCamera = useCallback(() => {
    setShowCamera(true);
  }, []);

  const onCancel = (showModal: boolean) => {
    props.setShow(showModal);
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
      <ModalHeader>{t('common:common_avatar')}</ModalHeader>
      <ModalBody>
        <Row>
          <Col sm="5">
            <Card className="text-white bg-secondary text-center">
              <CardBody>
                {!props.avatar ? (
                  <blockquote className="card-bodyquote">
                    <i className="fa fa-user-o iconAvatar d-block mt-4" />
                  </blockquote>
                ) : (
                    <img
                      src={props.avatar}
                      style={{ width: '120px', height: '120px' }}
                      className="rounded mx-auto d-block"
                    />
                  )}
                <input
                  id="setup-profile-avatar"
                  type="file"
                  name="avatar_image"
                  style={{ display: 'none' }}
                  onChange={onChangeAvatar}
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="4" md="3" xl="2">
            {!props.avatar ? (
              <Button color="primary" onClick={uploadFile}>
                {t('common:common_upload')}
              </Button>
            ) : (
                <Button color="primary" onClick={onDeleteAvatar}>
                  {t('common:common_delete')}
                </Button>
              )}
            <br />
            <Button className={"btnMargin"} color="primary" onClick={onOpenCamera}>
              {t('common:common_camera')}
            </Button>
            {isShowCamera && (
              <CameraComponent
                setShow={props.setShow}
                setFile={props.setFile}
                setAvatar={props.setAvatar}
              />
            )}

          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => onCancel(false)}>
          {t('common:common_cancel')}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UploadAvatar;
