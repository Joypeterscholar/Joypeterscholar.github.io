import React from 'react';
import Plus from '../img/plus.png';


const Label = () => (
  <div className='label'>
    <h3 style={{ padding: '0.8rem' }}>Labels</h3>
    <a href='#!' className='label_link'>
      <img src={Plus} alt='' width='17' height='17' />
    </a>
  </div>
);

export default Label;
