import React from 'react';
import { Button, Table } from 'reactstrap';

const CartTable = () => {
  const cartData = [
    {
      employee: 'Vicky4',
      cartItems: [
        {
          name: 'Mani',
          qty: 1,
          price: '$50.00'
        },
        {
          name: 'Nail Remove',
          qty: 1,
          price: '$35.00'
        }
      ]
    },
    {
      employee: 'Jenny5',
      cartItems: [
        {
          name: 'Deluxe Pedi',
          qty: 1,
          price: '$20.00'
        }
      ]
    }
  ];

  const rows = cartData.map((g, index) => {
    const childRows = g.cartItems.map((item, i) => {
      return (
        <tr key={g.employee + item.name}>
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>{item.price}</td>
          <td className="text-right">
            <Button
              color="link"
              size="md"
              className=""
            >
              <i className="fa fa-pencil-square-o text-color-main" />
            </Button>
            <Button
              color="link"
              size="md"
              className=""
            >
              <i className="fa fa-trash-o text-color-red-light" />
            </Button>
          </td>
        </tr>
      );
    });

    const groupRow = (
      <tr className="group" key={g.employee}>
        <td colSpan={3}><div>{g.employee}</div></td>
        <td>
          <Button
            type="button"
            size="md"
            className=""
          >
            <i className="fa fa-usd" />
            <span>Tip</span>
          </Button>
        </td>
      </tr>);

    return ([
      groupRow, childRows
    ]);
  });

  return (
    <>
      <Table borderless>
        <thead>
          <tr>
            <th>Items</th>
            <th>Qty</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </>
  );
};
export default CartTable;
