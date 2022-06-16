import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import '../components/ProfilesList.css';
import UserImg from '../images/userImg.png'
import {FaPen} from 'react-icons/fa';
import { fetchUsersAction } from '../redux/actions';
import Modal from './Modal';

export default function ProfilesList() {

  const [modalActive, setModalActive] = useState(false);
	const dispatch = useDispatch();
	const users = useSelector((state) => state.usersHistoryScoreReducer);

	useEffect(() => {
		dispatch(fetchUsersAction());
	  }, [dispatch]);

		let userList =Array.from(users);
		let sortedList = userList.sort((a, b) => b?.score - a?.score);

  return (
  <> <div className='item_users_list'>

		 {sortedList?.map((value, index) => (
			<li className='flex' key={index}>
				<div className='item'>
					<img src={UserImg} alt='logo' className='images' />
						<div className='item_score'>
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
			))}

		</div>

					<>
						<Modal active={modalActive} setActive={setModalActive}>
							<form action=''>
								<legend className='modal_header'> Edit user score </legend>
								<input className='modal_nameUser' type='text' label='Enter User Name'/>
								<input className='modal_score' type='number' />
								<br />
								<input type="submit" value="Save"></input>
							</form>
						</Modal>
					</>

    </>
  )
}


// function item( sortedList, setModalActive ) {
// 	return (
// 	<>
// 		{sortedList?.map((value, index) => (
// 			<li className='flex' key={index}>
// 				<div className='item'>
// 					<img src={UserImg} alt='logo' className='images' />
// 						<div className='item_score'>
// 							<span>{value.score}</span>
// 						</div>
// 						<div>
// 							<h3 className='name'>{value.name}</h3>
// 						</div>
// 						<div className='place'>
// 							<div>Place</div>
// 						</div>
// 						<div>
// 							<button onClick={() => setModalActive(true)}>
// 								<FaPen />
// 							</button>
// 						</div>
// 					</div>
// 				</li>
// 			))}
// 		</>
// 	)
// }
