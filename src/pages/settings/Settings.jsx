import './settings.css';
import profileImage from '../../img/profile.jpeg';
import { FaUserCircle } from 'react-icons/fa';




export default function Settings() {
    return (
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img className="" src={profileImage} alt="Profile" />
              <label htmlFor="fileInput">
                <FaUserCircle className="settingsPPIcon" />
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Saad" />
            <input type="email" placeholder="saad@gmail.com" />
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
      </div>
    );
  }
  