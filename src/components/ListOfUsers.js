import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../components/ListOfUsers.css';
import ProfilesList from './ProfilesList';
import { ADD_NEW_USER } from '../redux/actionType';
import Modal from './Modal';

export default function ListOfUsers({ users }) {
  const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState(false)
	const [user, setUser] = useState({});

	const onEdit = (user) => {
		setUser(user)
		setModalActive(true)
	}

	const onSubmit = (e, user) => {
		e.preventDefault()
    dispatch({type: ADD_NEW_USER, payload: user })

		}


return (
	<div className='list'>
		<div className='list_header'>
		<h2>Leaders table for this period</h2>
			<div className='btn'>
				<button className='btn_Nav' >{ '<<' }</button>
				<button className='btn_Nav' disabled >{ '>>' }</button>
				<button className='btn_newDay' >new day</button>
				<button className='btn_addNewUser'  onClick={ (e) => onEdit(user) }>+ Add new user</button>
			</div>
				<Modal active={ modalActive } setActive={ setModalActive }>
					<legend className='modal_header'> Add new user score </legend>
					<input className='modal_nameUser'  type='text' />
					<br />
					<input className='modal_score'  type='number' />
					<br />
					<input onClick={ onSubmit } type="submit" value="Save"></input>
				</Modal>
			</div>
				<ProfilesList users={ users }></ProfilesList>
		</div>
	)
}
