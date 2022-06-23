import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopLeadersBoard from './TopLeadersBoard';
import ListOfUsers from './ListOfUsers';
import '../components/Board.css';
import { fetchUsersAction } from '../redux/actions';

export default function Board() {
  const dispatch = useDispatch();
  const {data, load, error} = useSelector((state) => state.usersHistoryReducer)

  useEffect(() => {
    	dispatch(fetchUsersAction());
      }, [dispatch, error]);

  return !load && data?.length ? (
    <div className='board'>
      <h1>Cube<span className='board_header'>19</span>LeaderBoard</h1>
        <TopLeadersBoard users={data}  />
        <ListOfUsers users={data} />
    </div>
    ) : (<p>load...</p> )
}
