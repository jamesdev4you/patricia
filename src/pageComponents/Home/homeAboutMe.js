import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Woman from '../../assets/woman.jpg';
import { DarkOptionsButton } from '../../styledComponents.js';

const HomeAboutMe = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xl: '100vh',
          lg: '100vh',
          md: '100vh',
          sm: 'auto',
          xs: 'auto',
        },
        backgroundColor: (theme) => `${theme.palette.primary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: { xl: '1em', lg: '1em', md: '1em', sm: '2em', xs: '2em' },
        paddingBottom: {
          xl: '1em',
          lg: '1em',
          md: '1em',
          sm: '2em',
          xs: '2em',
        },
        flexDirection: 'column',
        gap: '2em',
      }}
    >
      <Box
        className='Typography--HomeAboutMe'
        sx={{ width: '85%', textAlign: 'center' }}
      >
        <Typography
          sx={{
            color: '#BB7A39',
            paddingBottom: '.1em',
            fontSize: {
              xl: '140px',
              lg: '100px',
              md: '80px',
              sm: '44px',
              xs: '32px',
            },
            fontFamily: 'KaushanScript',
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
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column-reverse',
            xs: 'column-reverse',
          },
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2em',
        }}
      >
        <Box
          className='Text--HomeAboutMe'
          sx={{
            width: {
              xl: '60%',
              lg: '60%',
              md: '60%',
              sm: '90%',
              xs: '90%',
            },
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
          <DarkOptionsButton title={'Get in Touch'} />
        </Box>
        <Box
          className='pic--HomeAboutMe'
          sx={{
            width: {
              xl: '20vw',
              lg: '20vw',
              md: '20vw',
              sm: '90%',
              xs: '90%',
            },
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
