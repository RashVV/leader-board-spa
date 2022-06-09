import React from 'react';
import TopLeadersBoard from './topLeadersBoard';
import ListOfUsers from './listOfUsers';
import '../components/style.css';

export default function Board() {
  return (
    <div className='board'>
      <h1>Cube19LeaderBoard</h1>
        <TopLeadersBoard />
        <ListOfUsers />
    </div>
    )
}
