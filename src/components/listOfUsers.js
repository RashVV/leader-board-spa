import React from 'react';
import '../components/style.css';

export default function listOfUsers() {
  return (
    <div className='list'>
			<div className='list_header'>
      <h2>Leaders table for this period</h2>
			<div className='btn'>
				<button>{'<<'}</button>
				<button>{'>>'}</button>
				<button className='newDay_Btn'>new day</button>
				<button className='addNewUserBtn'>+ Add new user</button>
			</div>
			</div>
			<div>
				<ul>1</ul>
				<ul>2</ul>
				<ul>3</ul>
				<ul>4</ul>
			</div>
    </div>
  )
}
