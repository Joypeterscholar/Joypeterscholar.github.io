import Square from '../img/square.png';
import Star from '../img/star.png';
import Important from '../img/important.png';

function EmailRowOption2() {
    return (
    <div className='emailRow_option'>
<button>
  <img
    src={Square}
    alt=''
    width='20'
    style={{ cursor: 'pointer' }}
  />
</button>
<button>
  <img
    src={Star}
    alt=''
    width='20'
    style={{ cursor: 'pointer' }}
  />
</button>
<button>
  <img
    src={Important}
    alt=''
    width='20'
    style={{ cursor: 'pointer' }}
  />
</button>
</div>
    );
};

export default EmailRowOption2;
