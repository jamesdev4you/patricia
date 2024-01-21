import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Woman from '../../assets/woman.jpg';
import { LightOptionsButton } from '../../styledComponents';

const headerOptions = [
  'A largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largestThe largest database of free icons for any project. The largest The largest database of free icons for any project. The largestThe largest database of free icons for any project. The largestThe largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest ',
  'B largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largestThe largest database of free icons for any project. The largest The largest database of free icons for any project. The largestThe largest database of free icons for any project. The largestThe largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest ',

  'C largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largestThe largest database of free icons for any project. The largest The largest database of free icons for any project. The largestThe largest database of free icons for any project. The largestThe largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest ',

  'D largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest database of free icons for any project. The largestThe largest database of free icons for any project. The largest The largest database of free icons for any project. The largestThe largest database of free icons for any project. The largestThe largest database of free icons for any project. The largest The largest database of free icons for any project. The largest The largest ',
];

const ContactHeader = () => {
  const [state, setState] = useState(0);

  return (
    <Box
      sx={{
        height: { xl: '90vh', lg: 'auto', md: 'auto', sm: 'auto', xs: 'auto' },
        width: '100%',
        backgroundColor: (theme) => `${theme.palette.primary.main}`,
        display: 'flex',
        alignItems: {
          xl: 'end',
          lg: 'center',
          md: 'center',
          sm: 'center',
          xs: 'center',
        },
        flexDirection: {
          xl: 'row',
          lg: 'column',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        justifyContent: 'center',
        gap: '2em',
        paddingTop: {
          xl: '2em',
          lg: '10em',
          md: '10em',
          sm: '10em',
          xs: '10em',
        },
        paddingBottom: '4em',
      }}
    >
      <Box
        sx={{
          display: {
            xl: 'flex',
            lg: 'none',
            md: 'none',
            sm: 'none',
            xs: 'none',
          },
          width: '27vw',
          height: '70vh',
          backgroundImage: `url(${Woman})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          border: '3px solid #bb7a39',
          borderRadius: '25px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }}
      />
      <Box
        className='TypographyButtons--Contact'
        sx={{
          width: {
            xl: '55%',
            lg: '80%',
            md: '70%',
            sm: '90%',
            xs: '90%',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4em',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            color: '#bb7a39',
            width: '100%',
            textAlign: 'center',
            lineHeight: '.6em',
          }}
        >
          About Me!
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: (theme) => `${theme.palette.secondary.main}`,
            width: '100%',
            textAlign: 'center',
          }}
        >
          {headerOptions[state]}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',

            gap: '3em',
          }}
        >
          <LightOptionsButton
            title={'Me!'}
            onClick={() => {
              setState(0);
            }}
          />
          <LightOptionsButton
            title={'Houses!'}
            onClick={() => {
              setState(1);
            }}
          />
          <LightOptionsButton
            title={'Book!'}
            onClick={() => {
              setState(2);
            }}
          />
          <LightOptionsButton
            title={'Podcast!'}
            onClick={() => {
              setState(3);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactHeader;
