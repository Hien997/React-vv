import React from 'react';
import {
  Row, Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from 'reactstrap';
import './styles.scss';

const EmployeeList = () => {
  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSV83gjFPxbUtDH5iJuUHJHG45z--_hYg6GUA&usqp=CAU';
  const employees = [
    {
      id: 123,
      name: 'Sam',
      order: 1,
      money: 100,
      status: 1,
      urlImage: url,
    },
    {
      id: 234,
      name: 'Juliet7',
      order: 2,
      money: 99,
      status: 1,
      urlImage: url,
    },
    {
      id: 345,
      name: 'Vicky4',
      order: 3,
      money: 20,
      status: 1,
      urlImage: url,
    },
    {
      id: 456,
      name: 'Billi6',
      order: 4,
      money: 0,
      status: 1,
      urlImage: url,
    },
    {
      id: 567,
      name: 'Rick3',
      order: 5,
      money: 0,
      status: 1,
      urlImage: url,
    },
    {
      id: 678,
      name: 'Nancy',
      order: null,
      money: 0,
      status: 0,
      urlImage: url,
    },
    {
      id: 789,
      name: 'Tony',
      order: null,
      money: 0,
      status: 0,
      urlImage: url,
    }
  ];
  // d-flex align-items-center justify-content-center
  return (
    <>
      <div className="pos-employees-list row">
        <ul>
          {
            employees.map((v, index) => {
              return <li
                className={v.status ? 'active' : 'inactive'}
                key={`empolyee-${v.id}`}
              >
                <div className="employee-card-container">
                  <Card>
                    <CardBody className="d-flex align-items-center justify-content-center">
                      <div className="employee-order-no">
                        <span>{v.order || '?'}</span>
                      </div>
                      <div>
                        <div className="employee-avatar" style={{ backgroundImage: `url(${v.urlImage})` }}>
                          {/* <img src={v.urlImage} alt="avatar" /> */}
                        </div>
                        <div className="employee-name">
                          <span>{v.name}</span>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className="text-center d-flex justify-content-between">
                      <div className="employee-money-sign" />
                      <div className="employee-money-number"><span>{v.money}</span></div>
                    </CardFooter>
                  </Card>
                </div>
              </li>;
            })
          }
        </ul>
      </div>
    </>
  );
};
export default EmployeeList;
