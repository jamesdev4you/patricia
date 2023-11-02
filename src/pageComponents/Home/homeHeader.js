import React from 'react';
import Woman from '../../assets/woman.jpg';
import RealEstate from '../../assets/realEstate.jpg';
import Podcast from '../../assets/podcast.jpg';
import Book from '../../assets/book.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const headerOptions = [
  {
    title: 'Contact',
    desc: 'The largest database of free icons for any project.',
    pic: Woman,
  },
  {
    title: 'Real Estate',
    desc: 'The largest database of free icons for any project.',
    pic: RealEstate,
  },
  {
    title: 'Podcast',
    desc: 'The largest database of free icons for any project.',
    pic: Podcast,
  },
  {
    title: 'Book',
    desc: 'The largest database of free icons for any project.',
    pic: Book,
  },
];

const HomeHeader = () => {
  return (
    <Box
      sx={{
        height: '90vh',
        width: '100%',
        backgroundColor: (theme) => `${theme.palette.primary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2em',
      }}
    >
      <Box
        className='Typography--Header'
        sx={{ width: '85%', textAlign: 'center' }}
      >
        <Typography
          variant='h1'
          sx={{
            color: (theme) => `${theme.palette.secondary.main}`,
            paddingBottom: '.1em',
          }}
        >
          Finding Your True Self
        </Typography>
        <Typography
          variant='h2'
          sx={{
            color: (theme) => `${theme.palette.secondary.main}`,
          }}
        >
          With Patrica Simone
        </Typography>
      </Box>
      <Box
        className='Options--Header'
        sx={{
          width: '85%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3em',
        }}
      >
        {headerOptions.map((item) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '17%',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                height: '230px',
                width: '230px',
                borderRadius: '50%',
                border: (theme) => `5px solid ${theme.palette.secondary.main}`,
                backgroundImage: `url(${item.pic})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'none',
                backgroundPosition: 'center',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              }}
            />
            <Typography
              variant='h3'
              sx={{ color: (theme) => `${theme.palette.secondary.main}` }}
            >
              {item.title}
            </Typography>
            <Typography
              variant='h5'
              sx={{ color: (theme) => `${theme.palette.secondary.main}` }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeHeader;
