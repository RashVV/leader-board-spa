import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../components/ProfilesList.css';
import UserTable from './UserTable';
import {EDITED_USER_SCORE} from '../redux/actionType';
import Modal from './Modal';

export default function ProfilesList( { users }) {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false)
	const [user, setUser] = useState({});

  const onEdit = (user, index) => {
		setUser({index, ...user})
		setModalActive(true)
	}

	const onChange = (score) => {
		setUser(prevState => ({
			...prevState,
			score,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()
    setModalActive(false)
    dispatch({type: EDITED_USER_SCORE, payload: user });
	}

	return (
		<>
		<ol id='profile'>
		{ UserTable(users, modalActive, onEdit) }
		</ol>
		<Modal active={modalActive} setActive={ setModalActive }>
				<legend className='modal_header'> Edit user score </legend>
				<input className='modal_nameUser' disabled value={ user.name } type='text' label='Enter User Name' />
				<br />
				<input className='modal_score' value={ user.score }  onChange={ e => onChange(+e.target.value) }  type='number' />
				<br />
				<input onClick={ onSubmit } type="submit" value="Save"></input>
		</Modal>
		</>
	)
}
