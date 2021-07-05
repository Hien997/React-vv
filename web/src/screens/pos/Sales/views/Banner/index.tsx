import React from 'react';
import { Row, Col } from 'reactstrap';
import './styles.scss';

const SaleBanner = () => {
  return (
    <>
      <div className="customer-sales__banner">
        <Row className="d-flex align-items-center">
          <Col className="col-3">
            <div className="pl-3">
              <div>
                <span className="main-text font-weight-bold">Vicky</span>
              </div>
              <div>
                <span className="sub-text text-color-gray-light font-weight-bold">
                  Ticket #0000
                </span>
              </div>
              <div>
                <span className="sub-text-sub text-color-gray font-weight-bold">
                  Total Ticket No 0001
                </span>
              </div>
            </div>
          </Col>
          <Col className="col-6">
            <div className="row container banner-search">
              <div className="col col-9 pr-0 pl-0">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Enter Name | Last 4 Tel. # | Membership"
                  />
                </div>
                <div className="search-info rounded-left ">
                  Customer Name | 300 points
                </div>
              </div>
              <div className="col col-3 pr-0 pl-0">
                <button
                  type="button"
                  className="btn btn-new-customer rounded-right"
                >
                  <div className="row">
                    <i className="col-auto fa fa-user-plus text-color-main pr-0 pl-3" />
                    <div className="col-auto pr-0 pl-1 text-left text-color-gray">
                      <div>New</div>
                      <div>Customer</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </Col>
          <Col className="col-3">
            <div className="btn-group btn-group-lg float-right" role="group">
              <button type="button" className="btn font-weight-bold">
                <div className="text-left p-2 text-color-gray">
                  Disable Disc. Mem.
                </div>
              </button>
              <button type="button" className="btn text-color-main">
                <div>
                  <i className="fa fa-eraser" />
                </div>
                <div>Clear</div>
              </button>
              <button type="button" className="btn text-color-blue">
                <div>
                  <i className="fa fa-refresh" />
                </div>
                <div>Refresh</div>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default SaleBanner;
