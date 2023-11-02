import React from 'react';
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import '../../navlink.css';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: (theme) => `${theme.palette.error.main}`,
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: 'auto',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'start',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              marginBottom: '20px',
              borderBottom: '1px solid #bb7a39',
              color: '#bb7a39',
            }}
            variant='h3'
          >
            {' '}
            Pages{' '}
          </Typography>
          <Typography variant='h5'>
            <NavLink to='/' className='nav_link'>
              {' '}
              Home{' '}
            </NavLink>
          </Typography>
          <Typography variant='h5'>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Appointment
            </NavLink>{' '}
          </Typography>
          <Typography variant='h5'>
            {' '}
            <NavLink to='/reviews' className='nav_link'>
              Reviews
            </NavLink>{' '}
          </Typography>
          <Typography variant='h5'>
            {' '}
            <NavLink to='/team' className='nav_link'>
              Team
            </NavLink>{' '}
          </Typography>
          <Typography variant='h5'>
            {' '}
            <NavLink to='/gallery' className='nav_link'>
              Gallery
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              marginBottom: '20px',
              borderBottom: '1px solid #bb7a39',
              color: '#bb7a39',
            }}
            variant='h3'
          >
            {' '}
            Services{' '}
          </Typography>
          <Typography variant='h5'>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Hair
            </NavLink>{' '}
          </Typography>
          <Typography variant='h5'>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Nails
            </NavLink>{' '}
          </Typography>
          <Typography variant='h5'>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Facials
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              marginBottom: '20px',
              borderBottom: '1px solid #bb7a39',
              color: '#bb7a39',
            }}
            variant='h3'
          >
            {' '}
            Contact{' '}
          </Typography>
          <Typography variant='h5'>
            <a
              href='tel:7274879698'
              style={{ color: '#bb7a39', textDecoration: 'none' }}
            >
              216-856-2205
            </a>
          </Typography>
          <Typography variant='h5' sx={{ color: '#bb7a39' }}>
            {' '}
            jamesdev4you@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              marginBottom: '20px',
              borderBottom: '1px solid #bb7a39',
              color: '#bb7a39',
            }}
            variant='h3'
          >
            {' '}
            Hours{' '}
          </Typography>
          <Typography sx={{ color: '#bb7a39' }} variant='h5'>
            {' '}
            Monday: 6:00 - 10:00
          </Typography>
          <Typography sx={{ color: '#bb7a39' }} variant='h5'>
            {' '}
            Tuesday: 6:00 - 10:00
          </Typography>
          <Typography sx={{ color: '#bb7a39' }} variant='h5'>
            {' '}
            Wednesday: 6:00 - 10:00
          </Typography>
          <Typography sx={{ color: '#bb7a39' }} variant='h5'>
            {' '}
            Thursday: 6:00 - 10:00
          </Typography>
          <Typography sx={{ color: '#bb7a39' }} variant='h5'>
            {' '}
            Friday: 6:00 - 10:00
          </Typography>
          <Typography sx={{ color: '#bb7a39' }} variant='h5'>
            {' '}
            Saturday: 6:00 - 10:00
          </Typography>
          <Typography sx={{ color: '#bb7a39' }} variant='h5'>
            {' '}
            Sunday: 6:00 - 10:00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
