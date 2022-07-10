import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopLeadersBoard from './TopLeadersBoard';
import ListOfUsers from './ListOfUsers';
import '../components/Board.css';
import { fetchUsersAction } from '../redux/actions';

export default function Board() {
  const dispatch = useDispatch();
  const { participants, currentIndexArr, isNextStep, load, error } = useSelector((state) => state.users)

  useEffect(() => {
    	dispatch(fetchUsersAction());
      }, [dispatch, error]);

  return !load ? (
    <div className='board'>
      <h1>Cube<span className='board_header'>19</span>LeaderBoard</h1>
        <TopLeadersBoard  />
        <ListOfUsers users={ participants[currentIndexArr] } isNextStep={ isNextStep } currentIndexArr={ currentIndexArr } />
    </div>
    ) : (<p>load...</p> )
}
