import React from 'react';
import Menu from '../img/menu.png';


const MenuButton = ({ onClick }) => (
  <button
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    <img id='menu' src={Menu} alt='' className='menu' />
  </button>
);

export default MenuButton;
