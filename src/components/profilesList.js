import React from 'react';
import '../components/style.css';
import {FaPen} from 'react-icons/fa';


export default function ProfilesList() {
  return (
    <div id='profile'>
        {item()}
    </div>
  )
}

function item() {
	return (
		<div className='flex'>
			<div className='item'>
				<img src='../../public/logo512.png' alt='logo' />
				<div className='item'>
					<span>Score</span>
				</div>
				<div>
					<h3 className='name'>Name</h3>
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
		</div>
	)
}
