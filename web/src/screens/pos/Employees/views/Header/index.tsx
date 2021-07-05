import React from 'react';
import { Row, Col } from 'reactstrap';
import './styles.scss';
import moment from 'moment';

// const today = moment().format('ddd, MMMM d');
// const nowTime = moment().format('LTS');
const storeName = 'POS NAILS STORE';

const EmployeeHeader = () => {
  return (
    <>
      <div className="pos-employees-header row d-flex justify-content-between align-items-center">
        <div className="employees-clock">
          <div className="employees-clock__date text-color-gray">{moment().format('ddd, MMMM d')}</div>
          <div className="employees-clock__time text-color-red">
            <span>{moment().format('hh:mm:ss')}</span><span> {moment().format('A')}</span>
          </div>
        </div>
        <div className="employees-store-name text-color-dark">
          <span>{storeName}</span>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-clock-in-out"
          >
            <div className="row d-flex align-items-center">
              <i className="col-auto fa fa-sign-in text-color-dark pr-1 pl-3" />
              <span className="col-auto pr-0 pl-1 text-left text-color-dark">
                Clock in/out
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
export default EmployeeHeader;
