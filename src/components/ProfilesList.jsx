import React, { useState} from 'react';
import '../components/ProfilesList.css';
import UserImg from '../images/userImg.png'
import {FaPen} from 'react-icons/fa';
import Modal from './Modal';

export default function ProfilesList( {users}) {
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

	const onSubmit = (e) => {
		e.preventDefault()
		debugger
	}

	return (
		<>
		<ol id='profile'>
		{item(users, modalActive, onEdit)}
		</ol>
		<Modal active={modalActive} setActive={setModalActive}>
				<legend className='modal_header'> Edit user score </legend>
				<input className='modal_nameUser' disabled value={user.name} type='text' label='Enter User Name' />
				<input className='modal_score' onChange={e => onChange(e.target.value)}  value={user.score} type='number' />
				<br />
				<input onClick={onSubmit} type="submit" value="Save"></input>
		</Modal>
		</>
	)
}

function item( users, modalActive, onEdit) {

	return (
		<>
			{users?.map((value, index) => (
				<li className='flex' key={index}>
					<div className='item'>
						<img src={UserImg} alt='logo' className='images' />
						<div  onClick={(e) => onEdit(value)} className='item'>
							<span>{value.score}</span>
						</div>
						<div>
							<h3 className='name'>{value.name}</h3>
						</div>
						<div className='place'>
							<div>Place</div>
						</div>
						<button type='button' onClick={(e) => onEdit(value)}>
							<FaPen />
						</button>
				</div>
				</li>
			))}
		</>
	)}
