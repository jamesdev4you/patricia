import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LightOptionsButton } from '../../styledComponents';
import PodcastPic from '../../assets/podcast.jpg';

const Podcast = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: { xl: '90vh', lg: 'auto', md: 'auto', sm: 'auto', xs: 'auto' },
        backgroundColor: (theme) => `${theme.palette.secondary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2em',
        paddingTop: { xl: '7em', lg: '7em', md: '7em', sm: '7em', xs: '6em' },
        paddingBottom: {
          xl: '20px',
          lg: '20px',
          md: '20px',
          sm: '4em',
          xs: '6em',
        },
      }}
    >
      <Box
        className='Typography--Divorced'
        sx={{ width: '85%', textAlign: 'center' }}
      >
        <Typography
          variant='h1'
          sx={{
            color: (theme) => `${theme.palette.primary.main}`,
            paddingBottom: '.1em',
          }}
        >
          Enjoying What's Next
        </Typography>
        <Typography
          variant='h2'
          sx={{
            color: (theme) => `${theme.palette.primary.main}`,
          }}
        >
          Find Your Way Forward
        </Typography>
      </Box>
      <Box
        className='TextPic--Divorced'
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'column',
            sm: 'column',
            xs: 'column',
          },
          width: '85%',
          height: {
            xl: '60vh',
            lg: 'auto',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
          gap: '2em',
        }}
      >
        <Box
          className='Pic--Divorced'
          sx={{
            width: {
              xl: '40%',
              lg: '90%',
              md: '90%',
              sm: '100%',
              xs: '100%',
            },
            height: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '300px',
              xs: '300px',
            },
            backgroundImage: `url(${PodcastPic})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            border: (theme) => `3px solid ${theme.palette.primary.main}`,
            borderRadius: '15px',
            marginTop: '1em',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        />
        <Box
          className='Text--Divorced'
          sx={{
            width: {
              xl: '60%',
              lg: '90%',
              md: '100%',
              sm: '100%',
              xs: '100%',
            },
            height: '75%',
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
              color: (theme) => `${theme.palette.primary.main}`,
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
            project. The largest database of free icons for any project.
          </Typography>
          <LightOptionsButton title={'Book Today!'} />
        </Box>
      </Box>
    </Box>
  );
};

export default Podcast;
