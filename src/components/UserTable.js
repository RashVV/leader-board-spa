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
              {!!value.newPlace && value.newPlace !== 0 && (
                <p style={{
                    color: value.newPlace >= 0 ? 'green' : 'red'
                  }}>
                  Place {value.newPlace > 0 ? (<span>&uarr;</span>) : (<span>&darr;</span>)} {Math.abs(value.newPlace)}
                </p>
              )}
                {value.newPlace === 0 && (<p className='noChange'>no change place</p>)}
                {!value.newPlace && (<p>today</p>)}
						</div>
						<button type='button' onClick={ (e) => onEdit(value, index) }>
							<FaPen />
						</button>
				</div>
				</li>
			))}
		</>
	)}

