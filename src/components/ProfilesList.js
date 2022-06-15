import React, { useEffect, useState} from 'react';
import '../components/ProfilesList.css';
import UserImg from '../images/userImg.png'
import {FaPen} from 'react-icons/fa';
import Modal from './Modal';

export default function ProfilesList( {fetchUsers, sortedUsers}) {
  const [modalActive, setModalActive] = useState(false)

	useEffect(() => {
		fetchUsers()
	}, [fetchUsers])

  return (
    <><ol id='profile'>
      {item(sortedUsers, setModalActive)}
	  <Modal active={modalActive} setActive={setModalActive} />
    </ol>
    </>
  )
}

function item(sortedUsers, setModalActive) {
	return (
		<>
		{
			sortedUsers?.map((value,index) => (
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
						<FaPen/>
					</button>
				</div>
			</div>
		</li>
		))
		}
		</>
	)
}
