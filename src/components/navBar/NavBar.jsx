import './navBar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import YoutubeIcon from '../../assets/youtube.png'

function NavbarScrolling() {


  return (
    <div className="navBar">
      <div className='logo'>
        <img src={YoutubeIcon} alt='logo Icon' />
        <span>SimoTube</span>
      </div>
      <div className="search">
          <SearchOutlinedIcon className='searchIcon'/>
          <input type="text" placeholder="Search..." />
        </div>
      <div className="signUp">
          <PersonOutlinedIcon className='btnIcon'/>
          <button >Sign Up</button>
        </div>
      
    </div>
  );
}

export default NavbarScrolling;