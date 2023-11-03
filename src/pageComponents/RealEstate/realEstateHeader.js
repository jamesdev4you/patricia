import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Woman from '../../assets/woman.jpg';
import RealEstateImg from '../../assets/realEstate.jpg';
import { LightOptionsButton } from '../../styledComponents';

const RealEstateHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundImage: `url(${RealEstateImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        flexDirection: 'column',
        paddingTop: '100px',
      }}
    >
      <Box
        sx={{
          width: '250px',
          height: '250px',
          border: `5px solid #BB7A39`,
          backgroundImage: `url(${Woman})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          borderRadius: '50%',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }}
      />
      <Typography
        variant='h1'
        sx={{
          color: (theme) => `${theme.palette.primary.main}`,
        }}
      >
        Real Estate Made Easy
      </Typography>
      <Typography
        variant='h2'
        sx={{
          color: (theme) => `${theme.palette.primary.main}`,
        }}
      >
        Specializing in Post-Divorce and Elderly
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2em',
          paddingTop: '1em',
        }}
      >
        <LightOptionsButton title={'Elderly Estate'} />
        <LightOptionsButton title={'Divorced Estate'} />
      </Box>
    </Box>
  );
};

export default RealEstateHeader;
