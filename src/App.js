import './app.css';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Main from './containers/Main/Main';
import Modal from './containers/Modal/Modal';
import { getProducts } from './api/products';
import { useEffect, useState } from 'react';

function App() {
	const [products, setProducts] = useState([]);
	const [modalActive, setModalActive] = useState(false);
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	useEffect(() => {
		getProducts()
			.then(products => {
				const productsWithImages = products.filter(product => product.images.length === 3);
				setProducts(productsWithImages)
			})
	}, [])

	return (
		<div className='app'>
			<Header
				setModalActive={setModalActive}
				userLoggedIn={userLoggedIn}
				setUserLoggedIn={setUserLoggedIn}
			/>
			<Main
				products={products}
				userLoggedIn={userLoggedIn}
			/>
			<Footer />
			<Modal
				active={modalActive}
				setModalActive={setModalActive}
				setUserLoggedIn={setUserLoggedIn}
			/>
		</div>
	);
}

export default App;