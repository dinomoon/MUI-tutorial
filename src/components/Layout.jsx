import React from 'react';
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined />,
      path: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlineOutlined />,
      path: '/create',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      {/* app bar */}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)` }}
        color="secondary"
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flex: 1 }}>
            Today is{' '}
            {`${new Date().getFullYear()}.${
              new Date().getMonth() + 1
            }.${new Date().getDate()}`}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar
            sx={{ ml: 2 }}
            src="https://raw.githubusercontent.com/iamshaunjp/material-ui-tut/lesson-18/public/mario-av.png"
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* side drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          variant="h5"
          component="span"
          sx={{ textAlign: 'center', py: 2 }}
        >
          Ninja Notes
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              sx={
                location.pathname === item.path && {
                  backgroundColor: '#f4f4f4',
                }
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
