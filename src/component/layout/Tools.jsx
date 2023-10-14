import React from 'react';
import Help from '../img/help.png';
import Settings from '../img/settings.png';
import Grid from '../img/grid.png';
import Img from '../img/joy.jpeg';


const Tools = () => (
  <div className='tools'>
    <a href='#!'>
      <img src={Help} alt='' width='24' />
    </a>
    <a href='#!'>
      <img src={Settings} alt='' width='24' />
    </a>
    <a href='#!'>
      <img src={Grid} alt='' width='24' />
    </a>
    <a href='#!'>
      <img
        src={Img}
        alt=''
        width='35'
        height='35'
        style={{ borderRadius: '50px' }}
      />
    </a>
  </div>
);

export default Tools;
