import React from 'react';

import './styles.scss';
import { Row, Col } from 'reactstrap';
import SaleBanner from '../views/Banner';
import ItemSelection from '../views/ItemSelection';
import SaleList from '../views/SaleList';
import SaleFooter from '../views/SaleFooter';

const Sales = () => {
  return (
    <>
      <div className="customer-sales">
        <SaleBanner />
        <div>
          <Row>
            <Col className="col-6 pr-0">
              <ItemSelection />
            </Col>
            <Col className="col-6 pl-2">
              <SaleList />
            </Col>
          </Row>
        </div>
        <SaleFooter />
      </div>
    </>
  );
};
export default Sales;
