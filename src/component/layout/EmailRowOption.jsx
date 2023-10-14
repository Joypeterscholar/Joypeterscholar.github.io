import DownloadFile from '../img/download-file.png';
import RecycleBin from '../img/recycle-bin.png';
import Email from '../img/email.png';


function EmailRowOption() {
    return (
      <div className='emailRow_opt'>
        <button>
          <img
            src={DownloadFile}
            alt=''
            width='20'
            style={{ cursor: 'pointer' }}
          />
        </button>
        <button>
          <img
            src={RecycleBin}
            alt=''
            width='20'
            style={{ cursor: 'pointer' }}
          />
        </button>
        <button>
          <img
            src={Email}
            alt=''
            width='20'
            style={{ cursor: 'pointer' }}
          />
        </button>
        <button>
          <img
            src='img/clock.png'
            alt=''
            width='20'
            style={{ cursor: 'pointer' }}
          />
        </button>
      </div>
    );
  };

  export default EmailRowOption;
  