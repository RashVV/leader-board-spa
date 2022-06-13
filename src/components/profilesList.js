import React, {useState} from 'react';
import '../components/style.css';
import {FaPen} from 'react-icons/fa';
import axios from 'axios';


export default function ProfilesList() {
	axios.get('http://coding-test.cube19.io/frontend/v1/starting-state')
	.then((resp)=>setUsers(resp.data))
	.catch(function (error) {
		console.log(error);
	  })
	const [users, setUsers] = useState([])



  return (
    <ol id='profile'>
        {item(users)}
    </ol>
  )
}

function item(users) {

	return (
		<>
		{
			users.map((value,index) => (
				<li className='flex' key={index}>
			<div className='item'>
				<img src='../../public/logo192.png' alt='logo' />
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
