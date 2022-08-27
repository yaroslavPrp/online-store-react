import React from 'react';
import style from './productsList.module.css';
import Product from '../Product/Product';

const ProductsList = ({ products, addProductToCart, userLoggedIn}) => {

	return (
		<div className={style.container}>
			{
				products.map(product => {
					return <Product
						key={product.id}
						product={product}
						addProductToCart={addProductToCart}
						userLoggedIn={userLoggedIn}
					/>
				})
			}
		</div>
	);
};

export default ProductsList;