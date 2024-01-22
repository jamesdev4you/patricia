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
        height: { xl: '90vh', lg: 'auto', md: 'auto', sm: 'auto', xs: 'auto' },
        backgroundColor: (theme) => `${theme.palette.primary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: '3em',
        flexDirection: 'column',
        gap: '2em',
        paddingBottom: '3em',
      }}
    >
      <Box
        className='Typography--elderly'
        sx={{ width: '85%', textAlign: 'center' }}
      >
        <Typography
          sx={{
            color: '#bb7a39',
            paddingBottom: '.1em',
            fontSize: {
              xl: '140px',
              lg: '100px',
              md: '80px',
              sm: '44px',
              xs: '35px',
            },
            fontFamily: 'KaushanScript',
          }}
        >
          Enjoying What's Next
        </Typography>
        <Typography
          sx={{
            color: '#bb7a39',
            fontSize: {
              xl: '60px',
              lg: '50px',
              md: '60px',
              sm: '34px',
              xs: '28px',
            },
            fontFamily: 'KaushanScript',
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
          className='Text--Elderly'
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
            project. The largest database of free icons for any project.
          </Typography>
          <LightOptionsButton title={'Book Today!'} />
        </Box>
        <Box
          className='Pic--elderly'
          sx={{
            width: {
              xl: '40%',
              lg: '90%',
              md: '100%',
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
            backgroundImage: `url(${RealEstatePic})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            border: `3px solid #bb7a39`,
            borderRadius: '15px',
            marginTop: '1em',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Elderly;
