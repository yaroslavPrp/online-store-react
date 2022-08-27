import React from 'react';
import style from './addToCartButton.module.css';

const addToCartButton = ({ addProductToCart, product, userLoggedIn }) => {
	return (
		<>
			{userLoggedIn ?
				<button
					className={style.addToCartBtn}
					onClick={() => addProductToCart(product)} > Add to cart </button> :
				<button
					className={style.addToCartBtn}
					disabled={true}>Log in to buy</button>
			}
		</>
	);
};

export default addToCartButton;