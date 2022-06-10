import React from 'react';
import Layer from '../topBg.svg';
import '../components/style.css';

export default function TopLeadersBoard() {
  return (
    <div className='top'>
			<div className='top_header'>
				<h2>All time Highest Scorers</h2>
			</div>
			<div className='top_leaders'>
				<ul>1</ul>
				<ul>2</ul>
				<ul>3</ul>
				<ul>4</ul>
				<div className='top_leaders-img'>
					<img src={Layer} alt='board' />
				</div>
			</div>
    </div>
    )
}
