import React, { PropTypes } from 'react';
import Product from './Product';
import uuid from 'uuid';
import HomeStyle from '../../../../public/home.scss';

const ProductList = ({
	api,
	stationNivel,
	station,
	loading,
	products,
	onApi,
	onAddItem
}) => (
	<section className={HomeStyle.projects}>
		<div className={HomeStyle.projects_item}>
			{loading && <span>Cargando Datos ...</span>}
			<h3>{station}</h3>
			<div className={HomeStyle.projects_btn}>
				<div className={HomeStyle.projects_btn1}><button onClick={()=> onApi(api,stationNivel - 1)} className={(stationNivel === 0)?HomeStyle.btnnone:''}> Volver </button></div>
				<div className={HomeStyle.projects_btn2}><button onClick={()=> onApi(api,stationNivel + 1)}> {(stationNivel === api.length - 1)?'Pagar': 'Siguiente'} </button></div>
			</div>
			<div className={HomeStyle.projects_box}>
			{
				products.map(product => (
					<Product
						key={uuid.v4()}
						onAddItem={onAddItem}
						station={station}
						{...product}
					/>
				))
			}
			</div>
		</div>
	</section>
);

ProductList.PropTypes = {
	station: PropTypes.string.isRequired,
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	loading: PropTypes.bool.isRequired,
	onAddItem: PropTypes.func.isRequired
}

export default ProductList;