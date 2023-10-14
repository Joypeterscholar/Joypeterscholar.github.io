import React from 'react';

const EmailCategory = ({ icon, text, active }) => (
  <a href='#!' className={`email_cat ${active ? 'active' : ''}`}>
    <img src={icon} alt='' width='20' />
    <p>{text}</p>
  </a>
);

export default EmailCategory;
