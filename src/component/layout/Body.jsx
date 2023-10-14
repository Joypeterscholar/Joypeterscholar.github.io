import React from 'react';
import './main.css';
import './query.css';
import DownArrow from '../img/down-arrow.png';
import Draft from '../img/draft.png';
// import GmailLogo from '../img/gmail-logo.png';
import Group from '../img/group.png';
import Important from '../img/important.png';
import Inbox from '../img/inbox.png';
import LogoGmail from '../img/logo_gmail.png';
import Square from '../img/square.png';
import Star from '../img/star.png';
import Tag from '../img/tag.png';
import MenuButton from './MenuButton';
import SearchBar from './SearchBar';
import Tools from './Tools';
import ComposeButton from './ComposeButton';
import EmailCategory from './EmailCategory';
import Label from './Label';
import EmailHeader from './EmailHeader';
import Footer from './Footer';
import More from './More';
import CustomButton from './CustomButton';
import EmailRow from './EmailRow';
import EmailRowOption from './EmailRowOption';
import EmailRowOption2 from './EmailRowOption2';

const Body = () => {
  const onClick = () => {
    const menu = () => {
      document.querySelector('#menu');
    };

    const sidebar = document.querySelector('#side_bar');

    menu(sidebar.classList.toggle('show_sidebar'));
  };
  return (
    <div>
      <header>
        <nav>
          <div className='navbar'>
            <div className='flex1'>
              <div className='menu_logo'>
                {MenuButton}
                <MenuButton onClick={onClick} />
                <a href='#!'>
                  <img src={LogoGmail} alt='' />
                </a>
              </div>
              <SearchBar />
            </div>
            {Tools}
            <Tools />
          </div>
        </nav>
      </header>
      <section className='body_content'>
        <div id='side_bar'>
          {ComposeButton}
          <ComposeButton />
          <div className='type'>
            <EmailCategory icon={Inbox} text="Inbox" active={true} />
            <EmailCategory icon={Star} text="Starred" active={false} />
            {EmailCategory}
            <EmailCategory icon={Draft} text="Draft" active={false} />
            <EmailCategory icon={DownArrow} text="More" active={false} />
            <Label />
            <EmailCategory icon={DownArrow} text="More" active={false} />
          </div>
        </div>
        <div className='email_box'>
          <>
          <EmailHeader/>
            <div className='first_sec_line2'>
              <a href='#!' className='msg_type section_selected'>
                <img src={Inbox} alt='' width='20' />
                <p>Primary</p>
              </a>
              <a href='#!' className='msg_type'>
                <img src={Tag} alt='' width='20' />
                <p>Promotions</p>
              </a>
              <a href='#!' className='msg_type'>
                <img src={Group} alt='' width='20' />
                <p>Social</p>
              </a>
            </div>
</>          <div
            className='second_sec'
            style={{ color: '#fff', backgroundColor: '#0000007a' }}
          >
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                 <CustomButton
                 src={Square}
                 alt="Square Icon"
                 width="20"
                 onClick={() => {
    // Your custom click handler logic here
   }}
   />

<CustomButton
  src={Star}
  alt="Star Icon"
  width="20"
  onClick={() => {
    // Your custom click handler logic here
  }}
/>

<CustomButton
  src={Important}
  alt="Important Icon"
  width="20"
  onClick={() => {
    // Your custom click handler logic here
  }}
/>
              </div>
            <EmailRow/>
            <EmailRowOption/>
            </a>
            <a href='#!' className='emailRow'>
             <EmailRowOption2/>
             <EmailRow/>
             <EmailRowOption/>
            </a>
            <a href='#!' className='emailRow'>
              <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
              <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>


            <a href='#!' className='emailRow'>
              <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>
            
            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

             <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>

            <a href='#!' className='emailRow'>
            <EmailRowOption2/>
              <EmailRow/>
              <EmailRowOption/>
            </a>
            
            <a href='#!' className='emailRow'>
              <EmailRowOption2/>
              <EmailRow/>
             <EmailRowOption/>
            </a>
            
            <a href='#!' className='emailRow'>
              <EmailRowOption2/>
                <EmailRow/>
              <EmailRowOption/>
            </a>
         <Footer/>
          </div>
        </div>
   <More/>
      </section>
    </div>
  );
};

export default Body;
