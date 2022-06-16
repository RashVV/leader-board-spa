import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../components/ListOfUsers.css';
import ProfilesList from './ProfilesList';
import { fetchUsersAction } from '../redux/actions';

export default function ListOfUsers() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsersAction());
	  }, [dispatch]);

  return (
    <div className='list'>
			<div className='list_header'>
      <h2>Leaders table for this period</h2>
			<div className='btn'>
				<button className='btn_Nav' onClick={ fetchUsersAction }>{ '<<' }</button>
				<button className='btn_Nav' disabled >{ '>>' }</button>
				<button className='btn_newDay' onClick={ fetchUsersAction }>new day</button>
				<button className='btn_addNewUser'>+ Add new user</button>
			</div>
			</div>
			<ProfilesList />
    </div>
  )
}
