import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../components/ProfilesList.css';
import UserTable from './UserTable';
import {EDITED_USER_SCORE} from '../redux/actionType';
import Modal from './Modal';

export default function ProfilesList( { users }) {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false)
	const [user, setUser] = useState({
    name: '',
    score: 0
  });

  const onEdit = (user) => {
		setUser({ ...user})
		setModalActive(true)
	}

	const onChange = (key, value) => {
		setUser(prevState => ({
			...prevState,
			[key]: value ? value : +value
		}))
	}

	const onSubmit = (e) => {
    debugger
		e.preventDefault()
    setUser(user)
    setModalActive(false)
    dispatch({type: EDITED_USER_SCORE, payload: user });

	}
  console.log(users[0])
	return (
		<>
		<ol id='profile'>
		{ UserTable(users, modalActive, onEdit) }
		</ol>
		<Modal active={modalActive} setActive={ setModalActive }>
				<legend className='modal_header'> Edit user score </legend>
				<input className='modal_nameUser' disabled name='name' value={ user.name } onChange={ e => onChange('name', e.target.value) } type='text' />
				<br />
				<input className='modal_score' name='score' value={ user.score }  onChange={ e => onChange('score', +e.target.value) }  type='number' />
				<br />
				<input onClick={ onSubmit } type="submit" value="Save"></input>
		</Modal>
		</>
	)
}
