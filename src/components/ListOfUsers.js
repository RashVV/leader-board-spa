import React, { useState } from 'react';
import '../components/ListOfUsers.css';
import ProfilesList from './ProfilesList';
import Modal from './Modal';

export default function ListOfUsers({ users }) {
	const [modalActive, setModalActive] = useState(false)
	const [user, setUser] = useState({});

	const onEdit = (user) => {
		setUser(user)
		setModalActive(true)
	}


	const onChange = (score) => {
		setUser(prevState => ({
			...prevState,
			score
		}))
	}

	const onSubmit = (e, score) => {
		e.preventDefault()
		setUser(prevState => ({
			...prevState,
			score
		}))
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
					<input className='modal_nameUser'  type='text' label='Enter User Name' />
					<br />
					<input className='modal_score' onChange={ e => onChange(e.target.value) } type='number' />
					<br />
					<input onClick={ onSubmit } type="submit" value="Save"></input>
				</Modal>
			</div>
				<ProfilesList users={ users }></ProfilesList>
		</div>
	)
}
