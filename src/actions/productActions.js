import {
  GO_STATION,
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SAVE_PRODUCT_INIT,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE
} from './types';
import API from '../api';

export function goStation(station) {
  return{
    type: GO_STATION,
    payload: station
  }
}

// Actions Creators
function fetchProductsSuccess (products, stationNivel) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    stationNivel: stationNivel,
    payload: products
  };
}

function fetchProductsFailure (error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
}

function saveProductSuccess () {
  return {
    type: SAVE_PRODUCT_SUCCESS
  };
}

function saveProductFailure (error) {
  return {
    type: SAVE_PRODUCT_FAILURE,
    payload: error
  };
}

// Actions Creators (Async)
export function fetchProducts (station, stationNivel = 0) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_PRODUCTS_INIT
      };
    })

    try {
      const data = await API.products.getAll(station);
      dispatch(fetchProductsSuccess(data, stationNivel));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  }
}

export function saveProduct (product) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: SAVE_PRODUCT_INIT
      }
    })

    try {
      await API.products.save(product);
      return dispatch(saveProductSuccess());
    } catch (error) {
      return dispatch(saveProductFailure(error));
    }
  };
}
