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
        height: { xl: '90vh', lg: '90vh', md: '90vh', sm: 'auto', xs: 'auto' },
        width: '100%',
        backgroundColor: (theme) => `${theme.palette.primary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2em',
        paddingTop: { xl: '0px', lg: '0px', md: '0px', sm: '4em', xs: '6em' },
        paddingBottom: {
          xl: '0px',
          lg: '0px',
          md: '0px',
          sm: '4em',
          xs: '6em',
        },
      }}
    >
      <Box
        className='Typography--Header'
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
              xs: '35px',
            },
            fontFamily: 'KaushanScript',
          }}
        >
          Finding Your True Self
        </Typography>
        <Typography
          sx={{
            color: '#BB7A39',
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
          With Patrica Simone
        </Typography>
      </Box>
      <Box
        className='Options--Header'
        sx={{
          width: { xl: '85%', lg: '85%', md: '95%', sm: '95%', xs: '95%' },
          height: {
            xl: '40vh',
            lg: '40vh',
            md: '40vh',
            sm: 'auto',
            xs: 'auto',
          },
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xl: '2em', lg: '4em', md: '3em', sm: '2em', xs: '1em' },
        }}
      >
        {headerOptions.map((item) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: { xl: '17%', lg: '17%', md: '17%', sm: '50%', xs: '50%' },
              textAlign: 'center',
            }}
            onMouseEnter={() => setState(item.id)}
            onMouseLeave={() => setState(0)}
          >
            <Box
              sx={{
                height: {
                  xl: state === item.id ? '250px' : '230px',
                  lg: state === item.id ? '250px' : '230px',
                  md: state === item.id ? '200px' : '180px',
                  sm: state === item.id ? '200px' : '180px',
                  xs: state === item.id ? '200px' : '180px',
                },
                width: {
                  xl: state === item.id ? '250px' : '230px',
                  lg: state === item.id ? '250px' : '230px',
                  md: state === item.id ? '200px' : '180px',
                  sm: state === item.id ? '200px' : '180px',
                  xs: state === item.id ? '200px' : '180px',
                },
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
