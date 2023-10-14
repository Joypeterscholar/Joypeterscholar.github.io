import EmailRow from './EmailRow';
function SecondSection() {
    return (
      <div className='second_sec' style={{ color: '#fff', backgroundColor: '#0000007a' }}>
        <EmailRow />
        <EmailRow />
        {/* Add more EmailRow components for each email */}
      </div>
    );
  }
export default SecondSection;
