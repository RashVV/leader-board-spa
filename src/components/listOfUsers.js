import React, { useState } from 'react';
import '../components/style.css';
import ProfilesList from './profilesList';
import axios from 'axios';

export default function listOfUsers() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [users, setUsers] = useState([])

	const fetchUsers = () => {
		axios.get('http://coding-test.cube19.io/frontend/v1/starting-state')
	.then((resp) => setUsers(resp.data.map((value, ) => value.score ? value : {score:0, ...value})))
	.catch(function (error) {
		console.log(error);
	  })
	}

	const sortedUsers = users.sort((a, b) => b?.score - a?.score);
	console.log('users', users)
	console.log('sortedUsers', sortedUsers)
  return (
    <div className='list'>
			<div className='list_header'>
      <h2>Leaders table for this period</h2>
			<div className='btn'>
				<button className='btn_Nav'>{'<<'}</button>
				<button className='btn_Nav'>{'>>'}</button>
				<button className='btn_newDay' onClick={fetchUsers}>new day</button>
				<button className='btn_addNewUser'>+ Add new user</button>
			</div>
			</div>
			<ProfilesList sortedUsers={sortedUsers} fetchUsers={fetchUsers}></ProfilesList>
    </div>
  )
}
