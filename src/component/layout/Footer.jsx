import React from 'react';
import Share from '../img/share.png';


const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <a href='#!' style={{ textDecoration: 'none' }}>
          <div className='storage_bar'>
            <div className='storage_bar_inner'></div>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: 'rgb(219, 219, 219)',
              }}
            >
              0.39 GB of 15 GB used
              <img src={Share} alt='' />
            </span>
          </div>
        </a>
      </div>
      <div>
        <a href='#!' className='footer_link'>
          Terms
        </a>
        <span style={{ color: 'gray', fontSize: 'larger' }}>.</span>
        <a href='#!' className='footer_link'>
          Privacy
        </a>
        <span style ={{ color: 'gray', fontSize: 'larger' }}>.</span>
        <a href='#!' className='footer_link'>
          Programme Policies
        </a>
      </div>
      <div>
        <p style={{ textAlign: 'right' }} className='footer_link'>
          Last account activity: 1 hour ago <br />{' '}
          <a href='#!' className='footer_link'>
            Details
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
