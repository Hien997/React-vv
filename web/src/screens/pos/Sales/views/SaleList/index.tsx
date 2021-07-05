import React from 'react';
import { Button, Table } from 'reactstrap';
import './styles.scss';
import CartTable from './cartTable';
import TotalBoard from './totalBoard';

const SaleList = () => {
  return (
    <>
      <div className="customer-sales__cart-table mt-2">
        <div className="d-flex">
          <div className="customer-sales__cart-table--action-group mr-2">
            <ul>
              <li className="">
                <Button
                  type="button"
                  size="md"
                  className=""
                >
                  <div><i className="fa fa-arrow-circle-o-down text-color-green" /></div>
                  <div><span>Discount</span></div>
                </Button>
              </li>
              <li className="">
                <Button
                  type="button"
                  size="md"
                  className=""
                >
                  <div><i className="fa fa-users text-color-main" /></div>
                  <div><span>More</span></div>
                </Button>
              </li>
              <li className="">
                <Button
                  type="button"
                  size="md"
                  className=""
                >
                  <div><i className="fa fa-print text-color-purple" /></div>
                  <div><span>Print Out</span></div>
                </Button>
              </li>
              <li className="">
                <Button
                  type="button"
                  size="md"
                  className=""
                >
                  <div><i className="fa fa-arrow-circle-down text-color-main" /></div>
                  <div><span>Mgr. Discount</span></div>
                  <div className="btn-footer"><span>$0.00</span></div>
                </Button>
              </li>
            </ul>
          </div>
          <div className="customer-sales__cart-table--item-list">
            <CartTable></CartTable>
          </div>
        </div>

        <div className="customer-sales__cart-table--total">
          <TotalBoard></TotalBoard>
        </div>
      </div>
    </>
  );
};
export default SaleList;
