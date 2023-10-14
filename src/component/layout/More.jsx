import React from 'react';
import Calendar from '../img/calendar_2020q4_2x.png';
import Keep from '../img/keep_2020q4v3_2x.png';
import Contact from '../img/contacts_2022_2x.png';
import Task from '../img/tasks_2021_2x.png';
import Plus from '../img/plus.png';


const More = () => {
  return (
    <div className='more'>
      <a href='#!'>
        <img src={Calendar} alt='' width='20' />
      </a>
      <a href='#!'>
        <img src={Keep} alt='' width='20' />
      </a>
      <a href='#!'>
        <img src={Task} alt='' width='20' />
      </a>
      <a href='#!'>
        <img src={Contact} alt='' width='20' />
      </a>
      <div className='border'></div>
      <a href='#!'>
        <img src={Plus} alt='' width='20' />
      </a>
    </div>
  );
};

export default More;
