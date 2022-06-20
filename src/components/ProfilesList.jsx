import React, { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import '../components/ProfilesList.css';
import UserImg from '../images/userImg.png'
import {FaPen} from 'react-icons/fa';
import Modal from './Modal';

export default function ProfilesList( {sortedUsers, fetchUsers}) {
  	const [modalActive, setModalActive] = useState(false)
	const usersFromApi = useSelector((state) => state.usersHistoryReducer)
	console.log(usersFromApi);


	return (
		<>
		<ol id='profile'>
		{item(usersFromApi, modalActive, setModalActive)}
		</ol>
		</>
	)
}

function item( usersFromApi, modalActive, setModalActive) {
	return !usersFromApi.load ? (usersFromApi.data.map((value, index) => (
		<>
			<li className='flex'>
				<div className='item'>
					<img src={UserImg} alt='logo' className='images' />
					<div className='item'>
						<span>{value.score}</span>
					</div>
					<div>
						<h3 className='name'>{value.name}</h3>
					</div>
					<div className='place'>
						<div>Place</div>
					</div>
					<div>
						<button onClick={() => setModalActive(true)}>
							<FaPen />
						</button>
					</div>
				</div>
			</li>
			<Modal active={modalActive} setActive={setModalActive}>
					<form action=''>
						<legend className='modal_header'> Edit user score </legend>
						<input className='modal_nameUser' type='text' label='Enter User Name' />
						<input className='modal_score' type='number' />
						<br />
						<input type="submit" value="Save"></input>
					</form>
				</Modal>

		</>
	)) ): null

		}
