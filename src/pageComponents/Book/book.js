import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LightOptionsButton } from '../../styledComponents';
import BookPic from '../../assets/book.jpg';

const Book = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: (theme) => `${theme.palette.secondary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: '6em',
        flexDirection: 'column',
        gap: '2em',
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
          Book Name
        </Typography>
        <Typography
          variant='h2'
          sx={{
            color: (theme) => `${theme.palette.primary.main}`,
          }}
        >
          Book Description
        </Typography>
      </Box>
      <Box
        className='TextPic--Divorced'
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
          className='Pic--Divorced'
          sx={{
            width: '40%',
            height: '75%',
            backgroundImage: `url(${BookPic})`,
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
            width: '60%',
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
            database of free icons for any project. The largest database of free
            icons for any project.
          </Typography>
          <LightOptionsButton title={'Link to Book'} />
        </Box>
      </Box>
    </Box>
  );
};

export default Book;
