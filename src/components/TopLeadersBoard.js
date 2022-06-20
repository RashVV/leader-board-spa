import React from 'react';
import Layer from '../topBg.svg';
import userImg  from '../images/userImg.png'
import '../components/TopLeadersBoard.css';

export default function TopLeadersBoard({users}) {
	const firstPlace = users[Object.keys(users)[0]]? users[Object.keys(users)[0]] : "1st Place";
	const secondPlace = users[Object.keys(users)[1]]? users[Object.keys(users)[1]] : "2nd Place";
	const thirdPlace = users[Object.keys(users)[2]]? users[Object.keys(users)[2]] : "3rd Place";
	const fourthPlace = users[Object.keys(users)[3]]? users[Object.keys(users)[3]] : "4th Place";

  return (
    <div className='top'>
			<div className='top_header'>
				<h2>All time Highest Scorers</h2>
			</div>
			<div className='top_leaders'>
				<ul className="top_leaders--block">
					<img src={userImg} alt='1stPlace'></img>
					<div className="top_leaders--block-title">
						<h1>{firstPlace.name}</h1>
					</div>
					<div className="top_leaders--block-score">{firstPlace.score}</div>
				</ul>
				<ul className="top_leaders--block">
					<img src={userImg} alt='2nd Place'></img>
					<div className="top_leaders--block-title">
						<h1>{secondPlace.name}</h1>
					</div>
					<div className="top_leaders--block-score">{secondPlace.score}</div>
				</ul>
				<ul className="top_leaders--block">
					<img src={userImg} alt='3rd Place'></img>
					<div className="top_leaders--block-title">
						<h1>{thirdPlace.name}</h1>
					</div>
					<div className="top_leaders--block-score">{thirdPlace.score}</div>
				</ul>
				<ul className="top_leaders--block">
					<img src={userImg} alt='4th Place'></img>
					<div className="top_leaders--block-title">
						<h1>{fourthPlace.name}</h1>
					</div>
					<div className="top_leaders--block-score">{fourthPlace.score}</div>
				</ul>
				<div className='top_leaders-img'>
					<img src={Layer} alt='board' />
				</div>
			</div>
    </div>
    )
}
