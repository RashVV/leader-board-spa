import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../components/ListOfUsers.css';
import ProfilesList from './ProfilesList';
import { fetchUsersAction } from '../redux/actions';


export default function ListOfUsers() {
	const dispatch = useDispatch();
	const usersFromApi = useSelector((state) => state.usersHistoryScoreReducer)
	const oldUsers = Array.from(usersFromApi);
	const [users, setUsers] = useState(oldUsers)

	useEffect(() => {
		dispatch(fetchUsersAction());
	  }, [dispatch]);
	  console.log(users);
	  const sortedUsers = oldUsers.sort((a, b) => b?.score - a?.score);


  return (
    <div className='list'>
			<div className='list_header'>
      <h2>Leaders table for this period</h2>
			<div className='btn'>
				<button className='btn_Nav' onClick={ setUsers(sortedUsers) }>{'<<'}</button>
				<button className='btn_Nav' disabled >{'>>'}</button>
				<button className='btn_newDay' onClick={fetchUsersAction()}>new day</button>
				<button className='btn_addNewUser'>+ Add new user</button>
			</div>
			</div>
			<ProfilesList sortedUsers={sortedUsers} fetchUsers={fetchUsersAction}></ProfilesList>
    </div>
  )
}
