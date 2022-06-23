import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../components/ListOfUsers.css';
import ProfilesList from './ProfilesList';
import { ADD_NEW_USER } from '../redux/actionType';
import Modal from './Modal';

export default function ListOfUsers({ users }) {
  const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState(false)
	const [user, setUser] = useState({
    name: '',
    score: 0
  });

	const onEdit = (user) => {
		setUser({
      name: '',
      score: ''
    })
		setModalActive(true)
	}

  const onChange = (key, value) => {
		setUser(prevState => ({
			...prevState,
			[key]: isNaN(value) ? value : +value
		}))
	}


	const onSubmit = (e) => {
    setUser({})
    setModalActive(false);
    dispatch({type: ADD_NEW_USER, payload: user });

		e.preventDefault()

	}


return (
	<div className='list'>
		<div className='list_header'>
		<h2>Leaders table for this period</h2>
			<div className='btn'>
				<button className='btn_Nav' >{ '<<' }</button>
				<button className='btn_Nav' disabled >{ '>>' }</button>
				<button className='btn_newDay' >new day</button>
				<button className='btn_addNewUser'  onClick={onEdit}>+ Add new user</button>
			</div>
				<Modal active={ modalActive } setActive={ setModalActive }>
					<legend className='modal_header'> Add new user score </legend>
					<input className='modal_nameUser' name='name' value={user.name}  type='text' onChange={ e => onChange('name', e.target.value) } />
					<br />
					<input className='modal_score' name='score' value={user.score} type='number' onChange={ e => onChange('score', e.target.value) }  />
					<br />
					<input onClick={ onSubmit } type="submit" value="Save"></input>
				</Modal>
			</div>
				<ProfilesList users={ users }></ProfilesList>
		</div>
	)
}
