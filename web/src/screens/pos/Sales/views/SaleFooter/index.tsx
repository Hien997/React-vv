import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import './styles.scss';

const SaleFooter = () => {
  return (
    <>
      <div>
        <Row className="customer-sales__footer mt-2">
          <Col className="col-6 left-action d-flex justify-content-between">
            <Button
              type="button"
              size="md"
              className="main-button"
            >
              <div><i className="fa fa-home" /></div>
              <div><span>Home</span></div>
            </Button>
            <Button
              type="button"
              size="md"
              className=""
            >
              <i className="fa fa-inbox text-color-main" />
              <span>Cash<br />Drawer</span>
            </Button>
            <Button
              type="button"
              size="md"
              className=""
            >
              <i className="fa fa-briefcase text-color-main" />
              <span>Booking<br />Appt.</span>
            </Button>
            <Button
              type="button"
              size="md"
              className=""
            >
              <i className="fa fa-vcard-o text-color-main" />
              <span>Sell<br />Gift Card</span>
            </Button>
            <Button
              type="button"
              size="md"
              className=""
            >
              <i className="fa fa-save text-color-main" />
              <span>Save<br />Ticket</span>
            </Button>
          </Col>
          <Col className="col-6 right-action pl-2 pr-0">
            <div className="d-flex justify-content-between right-action--container">
              <Button
                type="button"
                size="md"
                className=""
              >
                <div><i className="fa fa-money text-color-green" /></div>
                <div><span>CASH</span></div>
                <div className="btn-footer"><span>$0.00</span></div>
              </Button>
              <Button
                type="button"
                size="md"
                className=""
              >
                <div><i className="fa fa-credit-card text-color-blue" /></div>
                <div><span>CREDIT</span></div>
                <div className="btn-footer"><span>$0.00</span></div>
              </Button>
              <Button
                type="button"
                size="md"
                className=""
              >
                <div><i className="fa fa-gift text-color-purple" /></div>
                <div><span>Gift Card</span></div>
                <div className="btn-footer"><span>$0.00</span></div>
              </Button>
              <Button
                type="button"
                size="md"
                className=""
              >
                <div><i className="fa fa-check-square-o text-color-green" /></div>
                <div><span>CHECK</span></div>
                <div className="btn-footer"><span>$0.00</span></div>
              </Button>
              <Button
                type="button"
                size="md"
                className=""
              >
                <div><i className="fa fa-star text-color-yellow" /></div>
                <div><span>POINT</span></div>
                <div className="btn-footer"><span>$0.00</span></div>
              </Button>
              <Button
                type="button"
                size="md"
                className="main-button"
              >
                <div><i className="fa fa-check-circle-o" /></div>
                <div><span>Done</span></div>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default SaleFooter;
