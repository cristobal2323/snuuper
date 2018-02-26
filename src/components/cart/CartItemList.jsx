import React, { PropTypes} from 'react';
import uuid from 'uuid';
import Dashboard from '../../../public/dashboard.scss';
import CartItem from './CartItem';

const CartItemList = ({api, stationNivel, items, onRemoveItem, total, onGoStation }) => (
  <section className={`${Dashboard.module_table_new} ${Dashboard.table_normal}`}>
    <div>
      <div className={Dashboard.table_btn}>
        {
          api.map((item, i) => {
            const num = i;
            return ( <button onClick={() => onGoStation(i)} key={item}> {item} </button> )
          })
        }
      </div>
      <table>    
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Station</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
      {
        items.map((item, i) => (
          <CartItem
            key={uuid.v4()}
            onRemoveItem={onRemoveItem}
            {...item}
            num={i}
          />
        )).reverse()
      }
        </tbody>
        <tfoot>
          <tr>
            <td className={Dashboard.module_table_right} colSpan="4">Total</td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>

      <div className={`${Dashboard.table_btn} ${Dashboard.table_btn_right}`}>
        <button> Pagar </button>
      </div>

    </div>

  </section>
);

CartItemList.defaultProps = {
  items: []
};

CartItemList.propTypes = {
  total: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object),
  onRemoveItem: PropTypes.func.isRequired
};

export default CartItemList;
