import{
	GO_STATION,
	FETCH_PRODUCTS_INIT,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
	SAVE_PRODUCT_INIT,
	SAVE_PRODUCT_SUCCESS,
	SAVE_PRODUCT_FAILURE,
} from '../actions/types';

import initialState from './initialState';

export default function productListReducer(state = initialState.productList, action){
	switch(action.type){
		case GO_STATION :
			return{
				...state,
				stationNivel: action.payload,
			};
		case FETCH_PRODUCTS_INIT:
			return{
				...state,
				loading: true,
				error: null
			};	
		case FETCH_PRODUCTS_FAILURE:
			return{
				...state,
				products: [],
				station: null,
				success: false,
				error: action.payload,
				loading: false
			};
		case FETCH_PRODUCTS_SUCCESS:
			return{
				...state,
				products: action.payload.items,
				station: action.payload.station,
				success: action.payload.success,
				stationNivel: action.stationNivel,
				error: null,
				loading: false
			};
		case SAVE_PRODUCT_INIT :
			return{
				...state,
				loading: true,
				error: null
			};
		case SAVE_PRODUCT_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false,

			};
		case SAVE_PRODUCT_SUCCESS:
			return{
				...state,
				products: [...state.products, action.payload],
				loading: false,
				error: null,
			};
		default:
			return state;
	}
}