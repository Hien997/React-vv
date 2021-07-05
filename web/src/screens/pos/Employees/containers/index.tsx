import React from 'react';

import './styles.scss';
// import { Row, Col } from 'reactstrap';
import EmployeeHeader from '../views/Header';
import EmployeeList from '../views/List';
import EmployeeFooter from '../views/Footer';

const Employees = () => {
  return (
    <>
      <div className="pos-employee-list">
        <EmployeeHeader />
        <EmployeeList />
        <EmployeeFooter />
      </div>
    </>
  );
};
export default Employees;
