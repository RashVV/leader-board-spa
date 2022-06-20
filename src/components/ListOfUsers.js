import React from 'react';
import '../components/ListOfUsers.css';
import ProfilesList from './ProfilesList';


export default function ListOfUsers({users}) {


  return (
    <div className='list'>
			<div className='list_header'>
      <h2>Leaders table for this period</h2>
			<div className='btn'>
				<button className='btn_Nav' >{'<<'}</button>
				<button className='btn_Nav' disabled >{'>>'}</button>
				<button className='btn_newDay' >new day</button>
				<button className='btn_addNewUser'>+ Add new user</button>
			</div>
			</div>
			<ProfilesList></ProfilesList>
    </div>
  )
}
