import React from 'react';
import style from './header.module.css';
import { ReactComponent as SVGLogo } from '../../svg/bird-logo.svg';
import { NavLink } from 'react-router-dom';

const setActiveBtn = ({ isActive }) => {
	return isActive ? {} : { textDecoration: 'none' };
}

const Header = ({ setModalActive, userLoggedIn, setUserLoggedIn }) => {
	const handelLogInClick = () => {
		if (userLoggedIn) {
			setUserLoggedIn(false)
		} else {
			setModalActive(true)
		}
	}

	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.company}>
					<SVGLogo className={style.logo} />
					<div className={style.storeName}>Tiny bird shop</div>
				</div>

				<div className={style.navigation}>
					<NavLink to={'/'} style={setActiveBtn}>
						<button className={style.headerBtn}>Home</button>
					</NavLink>
					<NavLink to={'/aboutUs'} style={setActiveBtn}>
						<button className={style.headerBtn}>About us</button>
					</NavLink>
				</div>


				<div className={style.login}>
					<button onClick={handelLogInClick} className={style.headerBtn}>
						{userLoggedIn ? 'Log Out' : 'Log In'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;