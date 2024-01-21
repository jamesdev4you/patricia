import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../assets/logo.png';
import '../../navlink.css';
import '../../index.css';
import { Outlet } from 'react-router-dom';
import { LightPhoneButton } from '../../styledComponents';

const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Contact', href: '/contact' },
  { text: 'Real Estate', href: '/realestate' },
  { text: 'Podcast', href: '/podcast' },
  { text: 'Book', href: '/book' },
];

export default function NavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: 'black' }}
    >
      <img src={Logo} alt='yooo' style={{ height: '150px', width: '150px' }} />
      <Divider sx={{ backgroundColor: 'white' }} />
      <List sx={{ backgroundColor: 'black' }}>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            sx={{ margin: '15px 0px', backgroundColor: 'black' }}
            disablePadding
          >
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'Ubuntu',
                fontSize: '20px',
                margin: 'auto',
              }}
              to={item.href}
            >
              {item.text}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar
          sx={{ backgroundColor: (theme) => `${theme.palette.primary.main}` }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'block', md: 'none' },
              backgroundColor: 'black',
            }}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Box
            alt='yooo'
            sx={{
              display: { sm: 'none', md: 'block' },
              height: '70px',
              width: '70px',
              paddingTop: '5px',
              paddingBottom: '5px',
              marginLeft: {
                xs: 'auto',
                sm: 'auto',
                md: '0',
                lg: '0',
                xl: '0',
              },
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
              marginLeft: 'auto',
              paddingBottom: '15px',
              marginRight: '15px',
            }}
          >
            {navItems.map((item) => (
              <NavLink
                className='menu_link'
                style={{
                  textTransform: 'none',
                  color: (theme) => `${theme.palette.secondary.main}`,
                }}
                to={item.href}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component='nav' sx={{ backgroundColor: 'black' }}>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'black',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}
