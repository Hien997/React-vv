import React, { useCallback, useRef } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import Webcam from "react-webcam";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type CameraProps = {
  setShow: Function;
  setAvatar: Function;
  setFile: Function;
};

const videoConstraints = {
  width: 700,
  height: 700,
  facingMode: "user"
};

const CameraComponent: React.FC<CameraProps> = ({ ...props }) => {
  const { t } = useTranslation('common');
  const webcamRef = useRef(null);

  const Capture = useCallback(
    () => {
      let dataBase64 = webcamRef.current.getScreenshot();
      props.setAvatar(dataBase64);

      const byteString = atob(dataBase64.split(',')[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
      }
      const newImage = new Blob([ab], {
        type: 'image/jpeg',
      });

      props.setFile(newImage);
      toast.success(t('common_success'), {
        position: toast.POSITION.TOP_CENTER
      });
    },
    [webcamRef]
  );

  const Cancel = useCallback(
    () => {
      props.setShow(false);
    },
    [webcamRef]
  );

  const containerStyle = {
    zIndex: 1999
  };

  return (
    <Modal isOpen={true} size="lg">
      <ToastContainer position="top-right" autoClose={5000} style={containerStyle} />
      <ModalHeader >Camera</ModalHeader>
      <ModalBody>
        <Webcam
          audio={false}
          height={700}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={750}
          videoConstraints={videoConstraints}
        />
      </ModalBody>
      <ModalFooter>
        <Button onClick={Capture}>{t('common_capture')}</Button>
        <br />
        <Button onClick={Cancel}>{t('common_cancel')}</Button>
      </ModalFooter>
    </Modal >
  )
};

export default CameraComponent;    