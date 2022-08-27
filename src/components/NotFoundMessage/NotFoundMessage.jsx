import React from 'react';
import { Link } from 'react-router-dom';
import style from './notFoundMessage.module.css';

const NotFoundMessage = () => {
	return (
		<div className={style.message}>
			Page not found. Go to <Link to='/'>Home</Link> page.
		</div>
	);
};

export default NotFoundMessage;