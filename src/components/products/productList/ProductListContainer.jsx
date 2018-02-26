import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import * as productActions from '../../../actions/productActions';
import * as cartActions from '../../../actions/cartActions';
import { browserHistory } from 'react-router';

class ProductListContainer extends Component{

	constructor(props, context){
		super(props, context);
		this.handleOnAddItem = this.handleOnAddItem.bind(this);
		this.handleOnApi = this.handleOnApi.bind(this);

	}

	async componentWillMount(){
		const item = this.props.api[this.props.stationNivel];
		await this.props.productActions.fetchProducts(item, this.props.stationNivel);
	}

	async handleOnApi(api, stationNivel){
		const item = api[stationNivel];
		if(stationNivel < api.length){
			await this.props.productActions.fetchProducts(item, stationNivel);
		}else{
			 browserHistory.push('/cart');
		}
	}

	handleOnAddItem(item){
		this.props.cartActions.addCartItem(item);
	}

	render(){
		return(
			<ProductList 
				api={this.props.api}
				stationNivel={this.props.stationNivel}
				station={this.props.station}
				loading={this.props.loading}
				products={this.props.products}
				onApi={this.handleOnApi}
				onAddItem={this.handleOnAddItem}
			/>
		)
	}
}

ProductListContainer.defaultProps = {
	products:[]
};

ProductListContainer.PropTypes = {
	api: PropTypes.array.isRequired,
	stationNivel: PropTypes.number.isRequired,
	products: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool.isRequired,
	station: PropTypes.string.isRequired,
	productActions: PropTypes.objectOf(PropTypes.func).isRequired,
	cartActions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps(state){
	return{
		products: state.productList.products,
		station: state.productList.station,
		loading: state.productList.loading,
		stationNivel: state.productList.stationNivel,
		api: state.productList.api,
	};
}

function mapDispatchToProps(dispatch){
	return{
		productActions: bindActionCreators(productActions, dispatch),
		cartActions: bindActionCreators(cartActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);