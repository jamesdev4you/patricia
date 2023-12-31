import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Woman from '../../assets/woman.jpg';
import { LightOptionsButton } from '../../styledComponents.js';

const HomeAboutMe = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '95vh',
        backgroundColor: (theme) => `${theme.palette.primary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: '1em',
        flexDirection: 'column',
        gap: '2em',
      }}
    >
      <Box
        className='Typography--HomeAboutMe'
        sx={{ width: '85%', textAlign: 'center' }}
      >
        <Typography
          variant='h1'
          sx={{
            color: '#BB7A39',
            paddingBottom: '.1em',
          }}
        >
          I found happiness & bliss
        </Typography>
        <Typography
          variant='h2'
          sx={{
            color: '#BB7A39',
          }}
        >
          And you can too!
        </Typography>
      </Box>
      <Box
        className='TextPic--HomeAboutMe'
        sx={{
          width: '85%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2em',
        }}
      >
        <Box
          className='Text--HomeAboutMe'
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
            project. The largest database of free icons for any project. The
            largest database of free icons for any project. The largest database
            of free icons for any project. The largest database of free icons
            for any project. The largest database of free icons for any project.
            The largest database of free icons for any project. The largest
            database of free icons for any project.
          </Typography>
          <LightOptionsButton title={'Get in Touch'} />
        </Box>
        <Box
          className='pic--HomeAboutMe'
          sx={{
            width: '20vw',
            height: '60vh',
            backgroundImage: `url(${Woman})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            border: (theme) => `3px solid ${theme.palette.secondary.main}`,
            borderRadius: '25px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        />
      </Box>
    </Box>
  );
};

export default HomeAboutMe;
