import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as cartActions from '../../actions/cartActions';
import * as productActions from '../../actions/productActions';
import CartItemList from './CartItemList';

class CartContainer extends Component {
  constructor (props) {
    super(props);
    this.handleOnRemoveItem = this.handleOnRemoveItem.bind(this);
    this.handleOnGoStation = this.handleOnGoStation.bind(this);
  }

  componentWillMount () {
    this.props.actions.loadCartItems();
  }

  handleOnRemoveItem (itemId) {
    this.props.actions.removeCartItem(itemId);
  }
  handleOnGoStation (station) {
    this.props.productActions.goStation(station);
    browserHistory.push('/');
  }

  render () {
    return (
      <section className="container">
        <CartItemList
          api={this.props.api}
          stationNivel={this.props.stationNivel}
          total={this.props.total}
          items={this.props.items}
          goStation={this.handleOnRemoveItem}
          onRemoveItem={this.handleOnRemoveItem}
          onGoStation={this.handleOnGoStation}
        />
      </section>
    )
  }
}

CartContainer.defaultProps = {
  items: [],
  total: 0
};

CartContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number
};

function mapStateToProps (state) {
  return {
    items: state.cart.items,
    total: state.cart.total,
    stationNivel: state.productList.stationNivel,
    api: state.productList.api,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
