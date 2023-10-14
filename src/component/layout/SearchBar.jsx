import React from 'react';
import Search from '../img/search.png';
import Contrast from '../img/contrast-adjustment.png';


const SearchBar = () => (
  <div className='search_bar'>
    <div className='form'>
      <button type='submit' className='search_btn'>
        <img src={Search} alt='' />
      </button>
      <input
        type='text'
        className='search_bar_input'
        placeholder='Search mail'
      />
      <button type='submit' className='adjust_btn'>
        <img src={Contrast} alt='' />
      </button>
    </div>
  </div>
);

export default SearchBar;
