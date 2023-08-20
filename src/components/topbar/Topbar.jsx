
import "./topbar.css";
import profileImage from '../../img/profile.jpeg';
import { FaSearch } from 'react-icons/fa';


export default function Topbar() {
    return (
      <div className="top">
        <div className="topLeft">BLOG WEBSITE</div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topright">
          <img className="topImage" src={profileImage} alt="Profile" />
            <FaSearch className="topIcons"/>
        </div>
      </div>
    );
  }
  
  
