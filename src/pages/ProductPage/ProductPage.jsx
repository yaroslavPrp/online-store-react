import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/products';
import NotFoundMessage from '../../components/NotFoundMessage/NotFoundMessage';
import style from './productPage.module.css';

const ProductPage = ({ products }) => {
	const [product, setProduct] = useState();
	const [productNotFound, setProductNotFound] = useState(false);
	const params = useParams();
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const allProductsIds = products.reduce((accumulator, product) => {
			accumulator.push(product.id)
			return accumulator
		}, [])

		getProduct(params.productId, allProductsIds)
			.then(product => {
				setProduct(product)
				setProductNotFound(false)
				setSuccess(true)
			})
			.catch(error => {
				if (error === 'incorrect request')
					setProductNotFound(true)
			})

	}, [params.productId, products])

	if (!product && !productNotFound) return null;

	return (
		<div className={style.container}>
			<div className={style.content}>
				{productNotFound && null}
				{productNotFound && success && <NotFoundMessage />}
				{success && <div>{product.title}</div>}
			</div>
		</div>
	);
};

export default ProductPage;