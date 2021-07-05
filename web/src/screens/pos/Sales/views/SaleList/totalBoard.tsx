import React from 'react';
import { Row, Col } from 'reactstrap';

const TotalBoard = () => {
  return (
    <>
      <Row>
        <Col className="col-6">
          <Row>
            <Col className="col-7">
              <span className="text-color-gray-light">Disc. By  Item</span>
            </Col>
            <Col className="col-5">
              <span>$0.00</span>
            </Col>
          </Row>
          <Row>
            <Col className="col-7">
              <span className="text-color-gray-light">Disc. By  Emp.</span>
            </Col>
            <Col className="col-5">
              <span>$0.00</span>
            </Col>
          </Row>
          <Row>
            <Col className="col-7">
              <span className="text-color-gray-light">Disc. By  Ticket</span>
            </Col>
            <Col className="col-5">
              <span>$0.00</span>
            </Col>
          </Row>
          <Row>
            <Col className="col-7">
              <span className="text-color-gray-light">Disc. By  Mem.</span>
            </Col>
            <Col className="col-5">
              <span>$0.00</span>
            </Col>
          </Row>
        </Col>
        <Col className="col-6">
          <Row>
            <Col className="col-6 text-right">
              <span className="">Sub-Total</span>
            </Col>
            <Col className="col-6 text-color-red-light">
              <span>$105.00</span>
            </Col>
          </Row>
          <Row>
            <Col className="col-6 text-right">
              <span className="">Tax</span>
            </Col>
            <Col className="col-6 text-color-red-light">
              <span>$8.40</span>
            </Col>
          </Row>
          <Row>
            <Col className="col-6 text-right">
              <span className="">Disc. By Mgr.</span>
            </Col>
            <Col className="col-6 text-color-red-light">
              <span>$0.00</span>
            </Col>
          </Row>
          <Row>
            <Col className="col-6 text-right">
              <span className="">Total</span>
            </Col>
            <Col className="col-6 text-color-red-light">
              <span>$113.40</span>
            </Col>
          </Row>
          <Row>
            <Col className="col-6 text-right">
              <span className=""><b>Balance</b></span>
            </Col>
            <Col className="col-6 text-color-red-light">
              <span><b>$27.00</b></span>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default TotalBoard;
