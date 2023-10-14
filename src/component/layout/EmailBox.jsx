import FirstSection from './FirstSection';
import SecondSection from './SecondSection';


function EmailBox() {
    return (
      <div className='email_box'>
        {FirstSection}
        <FirstSection />
        {SecondSection}
        <SecondSection />
      </div>
    );
  }
export default EmailBox();




