import React from 'react';
import './UserTable.css';
import UserImg from '../images/userImg.png';
import { FaPen } from 'react-icons/fa';

// eslint-disable-next-line no-use-before-define
export default function UserTable( {users={users}, modalActive={modalActive}, onEdit={onEdit}}) {

	return (
			 users?.map((value, index) => (
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
              {!!value.gapPlace && value.gapPlace !== 0 && (
                <p style={{
                    color: value.gapPlace <= 0 ? 'green' : 'red'
                  }}>
                  Place {value.gapPlace < 0 ? (<span>&uarr;</span>) : (<span>&darr;</span>)} {Math.abs(value.gapPlace)}
                </p>
              )}
                {value.gapPlace === 0 && (<p className='noChange'>no change place</p>)}
                {!value.gapPlace && (<p>today</p>)}
						</div>
						<button type='button' onClick={ (e) => onEdit(value, index) }>
							<FaPen />
						</button>
				</div>
				</li>
			))
	)}

