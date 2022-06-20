import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopLeadersBoard from './TopLeadersBoard';
import ListOfUsers from './ListOfUsers';
import '../components/Board.css';
import { fetchUsersAction } from '../redux/actions';

export default function Board() {
  const dispatch = useDispatch();
  const {data, load} = useSelector((state) => state.usersHistoryReducer)
  const [users, setUsers] = useState({})

  useEffect(() => {
    	dispatch(fetchUsersAction());
      }, [dispatch]);

      useEffect(() => {
        setUsers(data);
        }, [data, dispatch]);

  return !load && users.length ? (
    <div className='board'>
      <h1>Cube<span className='board_header'>19</span>LeaderBoard</h1>
        <TopLeadersBoard users={users}  />
        <ListOfUsers users={users} />
    </div>
    ) : (<p>load...</p>)
}
