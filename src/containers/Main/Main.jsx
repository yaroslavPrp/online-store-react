import React from 'react';
import style from './main.module.css';
import CartInfo from '../../components/CartInfo/CartInfo';
import { useState } from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ProductPage from '../../pages/ProductPage/ProductPage';

const Main = ({ products, userLoggedIn }) => {
	const [cart, setCart] = useState([]);

	const addProductToCart = (newProduct) => {
		const isInCart = cart.find(product => product.id === newProduct.id);
		if (isInCart) {
			setCart(cart.map(product => {
				if (product.id === newProduct.id) {
					product.cartAmount += 1;
				}
				return product;
			}))
		}

		if (!isInCart) {
			newProduct.cartAmount = 1;
			setCart([...cart, newProduct]);
		}
	}

	return (
		<div className={style.container}>
			<div className={style.content}>
				{userLoggedIn &&
					<CartInfo cart={cart} />
				}
				<Routes>
					<Route
						path='/'
						element={<HomePage
							products={products}
							addProductToCart={addProductToCart}
							userLoggedIn={userLoggedIn}
						/>} />
					<Route
						path='/aboutUs'
						element={<AboutUsPage />}
					/>
					<Route
						path='/products/:productId'
						element={<ProductPage products={products} />}
					/>
					<Route
						path='*'
						element={<NotFoundPage />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default Main;