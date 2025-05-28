import React from 'react';
import './SubHeader.css';
import InfoIcon from '@mui/icons-material/Info';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';

 // Define an interface for the props that the SubHeader component will receive
interface SubHeaderProps {
  name: string;
  email: string;
  phone: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({ name, email, phone }) => {
  return (
    <div className="sub-header">
      <div className="left"> {/* Container for the user's name and contact info */}
        <h2 className="name">
          {name}
        </h2>
        <div className="contact-row"> {/* Container for the role, email, and phone */}
          <span className="role">Student-Athlete</span> 
          <a href={`mailto:${email}`} className="email">{email}</a>
          <span className="phone">{phone}</span>
        </div>
      </div>
 
      <div className="center"> {/* Container for the navigation icons and text */}
        <div className="icon-button">
          <InfoIcon />
          <span>DETAILS</span>
        </div>
        <div className="icon-button">
          <CalendarTodayIcon />
          <span>CALENDAR</span>
        </div>
        <div className="icon-button active">
            <SettingsIcon />
            <span>SETTINGS</span>
        </div>
      </div>

      <div className="right">
        <span className="datetime">May 28, 2025 | 5:30 PM</span>
      </div>
    </div>
  );
};

export default SubHeader;