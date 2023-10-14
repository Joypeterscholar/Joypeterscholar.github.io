import React from 'react';
import Pencil from '../img/pencil.png';


const ComposeButton = () => (
  <a href='#!' className='compose'>
    <img src={Pencil} alt='' width='20' />
    <p>Compose</p>
  </a>
);

export default ComposeButton;
