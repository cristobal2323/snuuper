import React from 'react';
import HomeStyle from '../../../public/home.scss';

const CartItem = ({
  id,
  name,
  excerpt,
  url,
  price,
  station,
  onRemoveItem,
  num
}) => (
  <tr>
    <td>{name}</td>
    <td>{excerpt}</td>
    <td>{price}</td>
    <td>{station}</td>
    <td>
     <button
        className="btn btn-danger"
        onClick={() => onRemoveItem(id)}
      >
        &times;
      </button>
      </td>
  </tr>
);

export default CartItem;
