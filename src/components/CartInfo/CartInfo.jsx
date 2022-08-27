import React from 'react';
import style from './cartInfo.module.css';
import { ReactComponent as SVGCart } from '../../svg/shopping-cart-svgrepo-com.svg';

const CartInfo = (props) => {
	const { cart } = props;
	const numberOfProducts = cart.reduce((prev, product) => prev + product.cartAmount, 0);
	const totalCartPrice = cart.reduce((prev, product) => prev + product.cartAmount * product.price, 0);

	return (
		<div className={style.container}>

			<div className={style.content}>
				<SVGCart className={style.cartLogo} />
				<div className={style.cartInfo}>
				{
					numberOfProducts === 1 ?
						`${numberOfProducts} item in Cart. For total: ${totalCartPrice} USD` :
						`${numberOfProducts} items in Cart. For total: ${totalCartPrice} USD`
				}
				</div>
			</div>
		</div>
	);
};

export default CartInfo;