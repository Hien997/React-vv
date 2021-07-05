import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import './styles.scss';

const EmployeeFooter = () => {
  return (
    <>
      <div className="row">
        <div className="pos-employees-footer">
          <Button
            type="button"
            size="md"
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-briefcase text-color-org" />
            <div className="text-color-gray-light">Income Report</div>
          </Button>
          <Button
            type="button"
            size="md"
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-share-square-o text-color-green" />
            <div className="text-color-gray-light">Turn System</div>
          </Button>
          <Button
            type="button"
            size="md"
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-th text-color-blue" />
            <div className="text-color-gray-light">C.Drawer</div>
          </Button>
          <Button
            type="button"
            size="md"
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-tachometer text-color-red-light" />
            <div className="text-color-gray-light">Booking Appt.</div>
          </Button>
          <Button
            type="button"
            size="md"
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-laptop text-color-purple" />
            <div className="text-color-gray-light">Check-In System</div>
          </Button>
        </div>
      </div>
    </>
  );
};
export default EmployeeFooter;
