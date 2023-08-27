import { Link } from "react-router-dom";
import "./topbar.css";
import profileImage from '../../img/profile.jpeg';
import { FaSearch } from 'react-icons/fa';


export default function Topbar() {
  const user = true;
    return (
      <div className="top">
        <div className="topLeft">BLOG WEBSITE</div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
                <Link to="/" className="link">HOME</Link>
            </li>
            <li className="topListItem">
                <Link to="/write" className="link">WRITE</Link>
            </li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImage"
              src={profileImage}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}            
        <FaSearch className="topIcons"/>
        </div>
      </div>
    );
  }
  
  
