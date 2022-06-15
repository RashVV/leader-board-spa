import React from 'react';
import '../components/Modal.css';

export default function Modal({active, setActive}) {
  return (
    <div className={ active ? 'modal.active' : 'modal' }>
    <div><button className='modal_close' onClick={() =>setActive(false)}>X</button></div>
        <div className='modal_header'>1</div>
        <div className='modal_content'>11</div>
    </div>
  )
}
