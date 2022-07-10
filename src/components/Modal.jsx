import React from 'react';
import '../components/Modal.css';

export default function Modal({ active, setActive, children }) {
  return (
    <div className={ active ? 'modal_active' : 'modal' }>
    <button className='modal_close' onClick={ () => setActive(false) }>x</button>
        <div className='modal_content'>{ children }</div>
    </div>
  )
}
