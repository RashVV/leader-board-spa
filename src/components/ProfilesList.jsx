import React, { useEffect, useState} from 'react';
import '../components/ProfilesList.css';
import UserImg from '../images/userImg.png'
import {FaPen} from 'react-icons/fa';
import Modal from './Modal';

export default function ProfilesList( {sortedUsers, fetchUsers}) {
  const [modalActive, setModalActive] = useState(false)

	useEffect(() => {
		fetchUsers()
	}, [fetchUsers])

  return (
    <>

	<ol id='profile'>
      {item(sortedUsers, modalActive, setModalActive)}
	</ol>
    </>
  )
}

function item(sortedUsers, modalActive, setModalActive) {
	return (
		<>
		{
			Array.from(sortedUsers)?.map((value,index) => (
				<>
				<Modal active={modalActive} setActive={setModalActive} key={index}>
						<form action=''>
							<legend className='modal_header'> Edit user score </legend>
							<legend className='modal_nameUser'>{value.name}</legend>
							<input className='modal_score' type='number' />
							<br/>
							<input type="submit" value="Save"></input>
						</form>
					</Modal>
					<li className='flex' key={index}>
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
				</li></>
		))
		}
		</>
	)
}
