import React from 'react';
import style from './modal.module.css';
import { ReactComponent as SVGCloseBtn } from '../../svg/close-square-svgrepo-com.svg';
import LogInForm from '../../components/LogInForm/LogInForm';

const Modal = ({ active, setModalActive, setUserLoggedIn }) => {
	return (
		<div className={active ? `${style.modal} ${style.activeModal}` : style.modal}
			onClick={() => setModalActive(false)}>

			<div className={active ? `${style.content} ${style.activeContent}` : style.content}
				onClick={e => e.stopPropagation()}>

				<SVGCloseBtn className={style.closeIcon} onClick={() => setModalActive(false)} />
				<LogInForm
					setModalActive={setModalActive}
					setUserLoggedIn={setUserLoggedIn}>
				</LogInForm>
				
			</div>

		</div>
	);
};

export default Modal;