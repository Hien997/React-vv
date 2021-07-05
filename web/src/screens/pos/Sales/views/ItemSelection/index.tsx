import React from 'react';
// import { Row, Col } from 'reactstrap';
import './styles.scss';

const ItemSelection = () => {
  const serviceType = [
    {
      name: 'Nail care',
    },
    {
      name: 'Add-On<br/>Services',
      isActive: true
    },
    {
      name: 'Misc sale',
    },
    {
      name: 'Waxing',
    },
    {
      name: 'Products',
    }
  ];

  const serviceItems = [
    {
      name: 'Mani',
      value: '$50.00'
    },
    {
      name: 'Mani',
      value: '$50.00'
    },
    {
      name: 'Mani',
      value: '$50.00'
    },
    {
      name: 'Mani',
      value: '$50.00'
    },
    {
      name: 'Mani',
      value: '$50.00'
    },
  ];

  return (
    <>
      <div className="customer-sales__item-selection mt-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-search" />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>

        <div className="d-flex mt-2">
          <div className="customer-sales__item-selection--service-group">
            <ul>
              {
                serviceType.map((v, index) => {
                  return <li className={v.isActive ? 'active d-flex align-items-center justify-content-center' : 'd-flex align-items-center justify-content-center'} key={`type-${index}`}><div dangerouslySetInnerHTML={{ __html: v.name }} /></li>;
                })
              }
            </ul>
          </div>
          <div className="customer-sales__item-selection--service-table">
            <div className="">
              {
                serviceItems.map((v, index) => {
                  return (
                    <div className="card" key={`item-${index}`}>
                      <div className="card-body">
                        <h5 className="card-title">{v.name}</h5>
                        <span>{v.value}</span>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemSelection;
