import React, { useState } from 'react';
import Woman from '../../assets/woman.jpg';
import RealEstate from '../../assets/realEstate.jpg';
import Podcast from '../../assets/podcast.jpg';
import Book from '../../assets/book.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const headerOptions = [
  {
    id: 1,
    title: 'Contact',
    desc: 'The largest database of free icons for any project.',
    pic: Woman,
  },
  {
    id: 2,
    title: 'Real Estate',
    desc: 'The largest database of free icons for any project.',
    pic: RealEstate,
  },
  {
    id: 3,
    title: 'Podcast',
    desc: 'The largest database of free icons for any project.',
    pic: Podcast,
  },
  {
    id: 4,
    title: 'Book',
    desc: 'The largest database of free icons for any project.',
    pic: Book,
  },
];

const HomeHeader = () => {
  const [state, setState] = useState(0);
  console.log(state);

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
            color: '#BB7A39',
            paddingBottom: '.1em',
          }}
        >
          Finding Your True Self
        </Typography>
        <Typography
          variant='h2'
          sx={{
            color: '#BB7A39',
          }}
        >
          With Patrica Simone
        </Typography>
      </Box>
      <Box
        className='Options--Header'
        sx={{
          width: '85%',
          height: '40vh',
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
            onMouseEnter={() => setState(item.id)}
            onMouseLeave={() => setState(0)}
          >
            <Box
              sx={{
                height: state === item.id ? '250px' : '230px',
                width: state === item.id ? '250px' : '230px',
                borderRadius: '50%',
                border: (theme) =>
                  state === item.id
                    ? `5px solid #BB7A39`
                    : `5px solid ${theme.palette.secondary.main}`,
                backgroundImage: `url(${item.pic})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'none',
                backgroundPosition: 'center',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                cursor: 'pointer',
              }}
            />
            <Typography
              variant='h3'
              sx={{
                cursor: 'pointer',
                color: (theme) =>
                  state === item.id
                    ? '#BB7A39'
                    : `${theme.palette.secondary.main}`,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant='h5'
              sx={{
                cursor: 'pointer',
                color: (theme) =>
                  state === item.id
                    ? '#BB7A39'
                    : `${theme.palette.secondary.main}`,
              }}
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
