import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RealEstatePic from '../../assets/realEstate.jpg';
import { LightOptionsButton } from '../../styledComponents';

const Divorced = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: { xl: '90vh', lg: 'auto', md: 'auto', sm: 'auto', xs: 'auto' },
        backgroundColor: (theme) => `${theme.palette.secondary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '3em',
        flexDirection: 'column',
        gap: '2em',
        paddingBottom: '3em',
      }}
    >
      <Box
        className='Typography--Divorced'
        sx={{ width: '85%', textAlign: 'center' }}
      >
        <Typography
          sx={{
            color: (theme) => `${theme.palette.primary.main}`,
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
            color: (theme) => `${theme.palette.primary.main}`,
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
        className='TextPic--Divorced'
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'column-reverse',
            sm: 'column-reverse',
            xs: 'column-reverse',
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
            backgroundImage: `url(${RealEstatePic})`,
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

export default Divorced;
