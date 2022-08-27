import React from 'react';
import style from './product.module.css';
import { Link } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton'

const Product = ({ product, addProductToCart, userLoggedIn }) => {
	const { id, title, price, images } = product;

	return (
		<div className={style.container}>
			<Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
				<h2 className={style.title}>{title}</h2>
			</Link>

			<div className={style.picture}>
				<img
					src={images[0]}
					alt='product'>
				</img>
			</div>

			<div className={style.price}>{`${price} USD`}</div>

			<div className={style.addToCartBtnContainer}>
					<AddToCartButton
						addProductToCart={addProductToCart}
						product={product}
						userLoggedIn={userLoggedIn} /> 
			</div>
		</div>
	);
};

export default Product;