import '../styles/SideBarL.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
//import SpotifyIcon from '';

function SideBarR() {
    const iconStyle = { fontSize: 35 };

  return (
    <div className='SideBar'>
      <div className='User'>
        <img src='' alt='User'/>
        <h3>Mike</h3>
      </div>
      <p>About this site <br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida ligula sit amet dolor consectetur, quis bibendum leo molestie. Ut eget pharetra arcu, quis suscipit nibh. Etiam aliquam, arcu euismod rhoncus condimentum, enim diam posuere eros, sed iaculis dui diam in tortor.</p>
      <p>© 2024 Review’s Site From Mike</p>

      <p>Contact and Social</p>
     
        <div className='Icons'>
          <LinkedInIcon style={iconStyle}/>
          <GitHubIcon style={iconStyle}/>
          <InstagramIcon style={iconStyle}/>
          <EmailIcon style={iconStyle}/>
        
      </div>
    </div>
  );
}

export default SideBarR;