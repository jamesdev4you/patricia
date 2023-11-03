import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RealEstatePic from '../../assets/realEstate.jpg';
import { LightOptionsButton } from '../../styledComponents';

const Elderly = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        backgroundColor: (theme) => `${theme.palette.primary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: '3em',
        flexDirection: 'column',
        gap: '2em',
      }}
    >
      <Box
        className='Typography--elderly'
        sx={{ width: '85%', textAlign: 'center' }}
      >
        <Typography
          variant='h1'
          sx={{
            color: '#bb7a39',
            paddingBottom: '.1em',
          }}
        >
          Enjoying What's Next
        </Typography>
        <Typography
          variant='h2'
          sx={{
            color: '#bb7a39',
          }}
        >
          Find Your Way Forward
        </Typography>
      </Box>
      <Box
        className='TextPic--Elderly'
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'row',
          width: '85%',
          height: '60vh',
          gap: '2em',
        }}
      >
        <Box
          className='Text--Elderly'
          sx={{
            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '.6em',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              color: (theme) => `${theme.palette.secondary.main}`,
              width: '100%',
              textAlign: 'left',
            }}
          >
            The largest database of free icons for any project. The largest
            database of free icons for any project. The largest database of free
            icons for any project. The largest database of free icons for any
            project. The largest database of free icons for any project. The
            largest database of free icons for any project. The largest database
            of free icons for any project. The largest database of free icons
            for any project. The largest database of free icons for any project.
            The largest database of free icons for any project. The largest
            database of free icons for any project. The largest database of free
            icons for any project. The largest database of free icons for any
            project. The largest database of free icons for any project.The
            largest database of free icons for any project. The largest database
            of free icons for any project. The largest database of free icons
            for any project.
          </Typography>
          <LightOptionsButton title={'Book Today!'} />
        </Box>
        <Box
          className='Pic--elderly'
          sx={{
            width: '40%',
            height: '75%',
            backgroundImage: `url(${RealEstatePic})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            border: `3px solid #bb7a39`,
            borderRadius: '15px',
            marginTop: '1em',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Elderly;
