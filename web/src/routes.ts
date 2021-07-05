import React from 'react';

const Dashboard = React.lazy(() =>
  import('./screens/admin/Dashboard/views/Dashboard')
);
const EmployeeList = React.lazy(() =>
  import('./screens/admin/Employee/containers/List')
);
const ServiceList = React.lazy(() =>
  import('./screens/admin/Service/containers/List')
);
const CustomerList = React.lazy(() =>
  import('./screens/admin/Customer/containers/List')
);
const Memberships = React.lazy(() =>
  import('./screens/admin/Memberships/containers/List')
);

const Giftcardlist = React.lazy(() =>
  import('./screens/admin/Giftcard/containers/List')
);
const Suppliers = React.lazy(() =>
  import('./screens/admin/Suppliers/containers/List')
);
const EmployeeSales = React.lazy(() =>
  import('./screens/pos/Sales/containers')
);

const Employees = React.lazy(() =>
  import('./screens/pos/Employees/containers')
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {
    path: '/employees',
    exact: true,
    name: 'Employees',
    component: EmployeeList,
    auth: {
      roles: ['amin'],
    },
  },
  {
    path: '/services',
    exact: true,
    name: 'Service List',
    component: ServiceList,
    auth: {
      roles: ['amin'],
    },
  },
  {
    path: '/customers',
    exact: true,
    name: 'Customers',
    component: CustomerList,
    auth: {
      roles: ['amin'],
    },
  },
  {
    path: '/memberships',
    exact: true,
    name: 'Memberships',
    component: Memberships,
    auth: {
      roles: ['amin'],
    },
  },
  {
    path: '/suppliers',
    exact: true,
    name: 'Suppliers',
    component: Suppliers,
    auth: {
      roles: ['amin'],
    },
  },
  {
    path: '/giftcards',
    exact: true,
    name: 'Giftcards',
    component: Giftcardlist,
    auth: {
      roles: ['amin'],
    },
  },
  {
    path: '/pos/sales',
    exact: true,
    name: 'Employee Sale',
    component: EmployeeSales,
  },
  {
    path: '/pos/employees',
    exact: true,
    name: 'POS Employee',
    component: Employees,
  },
];

export default routes;
