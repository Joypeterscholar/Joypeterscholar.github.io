import React from 'react';
import DownwardArrow from '../img/downward-arrow.png';
import Square from '../img/square.png';
import Refresh from '../img/refresh.png';
import Dots from '../img/dots.png';
import Left from '../img/left.png';
import Next from '../img/next.png';
import Align from '../img/align.png';


const EmailHeader = () => {
  return (
    <div className='first_sec'>
      <div className='first_sec_line1'>
        <div>
          <div>
            <a
              href='#!'
              style={{
                padding: '0.7rem 0.3rem',
                marginLeft: '-0.5rem',
                borderRadius: '5px',
              }}
            >
              <img src={Square} alt='' width='18' />
            </a>
            <a
              href='#!'
              style={{
                padding: '0.7rem 0.2rem',
                marginLeft: '-0.5rem',
                borderRadius: '5px',
              }}
            >
              <img src={DownwardArrow} alt='' width='13' />
            </a>
          </div>
          <a href='#!'>
            <img src={Refresh} alt='' width='17' />
          </a>
          <a href='#!'>
            <img src={Dots} alt='' width='18' />
          </a>
        </div>
        <div style={{ marginRight: '1rem' }}>
          <a
            href='#!'
            style={{
              fontSize: '15px',
              color: 'rgb(202, 202, 202)',
              borderRadius: '5px',
            }}
          >
            1-50 of 447
          </a>
          <a href='#!' style={{ background: 'none' }}>
            <img src={Left} alt='' width='17' />
          </a>
          <a href='#!'>
            <img src={Next} alt='' width='17' />
          </a>
          <div>
            <a
              href='#!'
              style={{
                padding: '0.7rem 0.3rem',
                marginLeft: '-0.5rem',
                borderRadius: '5px',
              }}
            >
              <img src={Align} alt='' width='17' />
            </a>
            <a
              href='#!'
              style={{
                padding: '0.7rem 0.2rem',
                marginLeft: '-0.5rem',
                borderRadius: '5px',
              }}
            >
              <img src={DownwardArrow} alt='' width='13' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailHeader;
