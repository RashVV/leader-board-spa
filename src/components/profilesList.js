import React, { useEffect} from 'react';
import '../components/style.css';
import UserImg from '../images/userImg.png'
import {FaPen} from 'react-icons/fa';

export default function ProfilesList( {fetchUsers, sortedUsers}) {

	console.log('sortedUsers' ,sortedUsers);

	useEffect(() => {
		fetchUsers()
	}, [fetchUsers])

  return (
    <ol id='profile'>
        {item(sortedUsers)}
    </ol>
  )
}

function item(sortedUsers) {
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
					<button>
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
