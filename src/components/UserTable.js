import React from 'react';
import './UserTable.css';
import UserImg from '../images/userImg.png';
import { FaPen } from 'react-icons/fa';

export default function UserTable( users, modalActive, onEdit) {

	return (
		<>
			{users?.map((value, index) => (
				<li className='flex' key={ index }>
					<div className='item'>
						<img src={ UserImg } alt='logo' className='images' />
						<div  onClick={ (e) => onEdit(value) } className='item'>
							<span>{ value.score }</span>
						</div>
						<div>
							<h3 className='name'>{ value.name }</h3>
						</div>
						<div className='place'>
							<div>Place</div>
						</div>
						<button type='button' onClick={ (e) => onEdit(value, index) }>
							<FaPen />
						</button>
				</div>
				</li>
			))}
		</>
	)}

