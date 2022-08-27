import React, { useRef, useState } from 'react';
import style from './logInForm.module.css';

const LOGIN = 'qwe';
const PASSWORD = '123';

const LogInForm = ({ setModalActive, setUserLoggedIn}) => {
	const [showPassword, setShowPassword] = useState(false);
	const [values, setValues] = useState({ login: '', password: '' });
	const checkbox = useRef();
	const [loginError, setLoginError] = useState(false);

	const resetForm = () => {
		setValues({ login: '', password: '' })
		setModalActive(false);
		setShowPassword(false);
		checkbox.current.checked = false;
		setLoginError(false);
	}

	const handleCancelClick = (event) => {
		event.preventDefault();
		resetForm();
	}

	const handleSaveClick = (event) => {
		event.preventDefault();
		if (values.login === LOGIN && values.password === PASSWORD) {
			resetForm();
			setUserLoggedIn(true);
		} else {
			setLoginError(true);
		}
	}

	const handelChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}

	return (
		<form className={style.form}>
			<h2 className={style.title}>Log In</h2>

			<label className={style.element}> Username
				<input
					className={style.input}
					type='text'
					placeholder='Username'
					name='login'
					value={values.login}
					onChange={event => handelChange(event)}
				/>
			</label>
			<label className={style.element}> Password
				<input
					className={style.input}
					type={showPassword ? 'text' : 'password'}
					placeholder='Password'
					name='password'
					value={values.password}
					onChange={event => handelChange(event)}
				/>
			</label>

			{loginError &&
				<div className={style.loginError}>
					Incorrect username or password
				</div>
			}

			<div className={style.checkboxContainer}>
				<input
					className={style.checkbox}
					type='checkbox'
					onClick={() => setShowPassword(!showPassword)}
					ref={checkbox}
				/>
				<div className={style.checkboxText}>Show password</div>
			</div>

			<div className={style.buttons}>
				<button className={style.button} onClick={e => handleSaveClick(e)}>Log in</button>
				<button className={style.button} onClick={e => handleCancelClick(e)}>Cancel</button>
			</div>
		</form>
	);
};

export default LogInForm;