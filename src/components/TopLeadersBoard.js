import React from 'react';
import { useSelector } from 'react-redux';
import Layer from '../topBg.svg';
import userImg  from '../images/userImg.png'
import '../components/TopLeadersBoard.css';

export default function TopLeadersBoard() {
	const usersFromApi = useSelector((state) => state.usersHistoryReducer)
	const firstPlace = usersFromApi[Object.keys(usersFromApi)[0]]? usersFromApi[Object.keys(usersFromApi)[0]] : "1st Place";
	const secondPlace = usersFromApi[Object.keys(usersFromApi)[1]]? usersFromApi[Object.keys(usersFromApi)[1]] : "2nd Place";
	const thirdPlace = usersFromApi[Object.keys(usersFromApi)[2]]? usersFromApi[Object.keys(usersFromApi)[2]] : "3rd Place";
	const fourthPlace = usersFromApi[Object.keys(usersFromApi)[3]]? usersFromApi[Object.keys(usersFromApi)[3]] : "4th Place";

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
