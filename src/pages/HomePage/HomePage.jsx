import React from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';

const HomePage = ({ products, userLoggedIn, addProductToCart }) => {

	return (
		<ProductsList
			products={products}
			addProductToCart={addProductToCart}
			userLoggedIn={userLoggedIn}
		/>
	);
};

export default HomePage;