import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShieldIcon from '@mui/icons-material/Shield';

interface SidebarProps {}

const Sidebar: React.FC = () => {
  const location = useLocation(); // Get the current URL location using the useLocation hook from react-router-dom

  return (
    <div
      style={{
        width: '200px',
        backgroundColor: '#f0f0f0',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/profile"
            selected={location.pathname === '/profile'}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/account"
            selected={location.pathname === '/account'}
          >
            <ListItemIcon>
              <ShieldIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;