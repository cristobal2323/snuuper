import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import HomeStyle from '../../../../public/home.scss';

const Product = ({
	id,
	name,
	excerpt,
	price,
	url,
	station,
	onAddItem
}) => (
	<div>
		<div className={HomeStyle.projects_item_img}>
			<img width="100%" src={url} alt={excerpt} />
		</div>
		<h4>{name}</h4>
		<p>{excerpt}</p>
		<ul>
			<li>Precio: {price} $</li>
			<li>Entrega: {price}</li>
			<li>Categoria: {station}</li>
		</ul>
	
		<button 
		onClick={()=> onAddItem({id,name,excerpt,url,price,station})}>
			<span className="fa fa-cart-plus">
				Añadir al carrito
			</span>
		</button>
	</div>
);

Product.PropTypes = {
	station: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	onAddItem : PropTypes.func.isRequired
}

export default Product;