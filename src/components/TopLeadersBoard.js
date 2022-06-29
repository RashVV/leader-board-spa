import React from 'react';
import { useSelector } from 'react-redux';
import Layer from '../topBg.svg';
import userImg  from '../images/userImg.png'
import '../components/TopLeadersBoard.css';

export default function TopLeadersBoard() {
  const { participants } = useSelector((state) => state.usersHistoryReducer);
  const leaders = participants.flat(Infinity);
  const topUsers = leaders.sort((a, b) => b?.score - a?.score).slice(0, 4);

  return (
    <div className='top'>
			<div className='top_header'>
				<h2>All time Highest Scorers</h2>
			</div>
			  <ul className='top_leaders'>
          { topUsers?.map((value, index) => (
				    <li className="top_leaders--block" key={ index }>
					      <div className="top_leaders--img">
						      <img src={ userImg } alt='topUsers' />
                <div>
							      <h1 className="top_leaders--block-title">{ value.name }</h1>
						    </div>
						    <div className="top_leaders--block-score">
							    <span>{ value.score }</span>
						    </div>
				        </div>
				    </li>
			    ))}
          <div className='top_leaders-img'>
            <img src={ Layer } alt='board' />
          </div>
		    </ul>
    </div>
  )
}
