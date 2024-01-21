import React from 'react';
import { ReactComponent as Contact } from '../../assets/phone.svg';
import { ReactComponent as RealEstate } from '../../assets/realEstate.svg';
import { ReactComponent as Podcast } from '../../assets/podcast.svg';
import { ReactComponent as Book } from '../../assets/book.svg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DarkOptionsButton } from '../../styledComponents.js';
import SvgIcon from '@mui/material/SvgIcon';

const infoOptions = [
  {
    icon: Contact,
    title: 'Contact',
    subTitle: 'The largest database of free icons for any project.',
    desc: 'The largest database of free icons for any project. The largest database of free icons for any project.',
  },
  {
    icon: RealEstate,
    title: 'Real Estate',
    subTitle: 'The largest database of free icons for any project.',
    desc: 'The largest database of free icons for any project. The largest database of free icons for any project.',
  },
  {
    icon: Podcast,
    title: 'Podcast',
    subTitle: 'The largest database of free icons for any project.',
    desc: 'The largest database of free icons for any project. The largest database of free icons for any project.',
  },
  {
    icon: Book,
    title: 'Book',
    subTitle: 'The largest database of free icons for any project.',
    desc: 'The largest database of free icons for any project. The largest database of free icons for any project.',
  },
];

const HomeInfo = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xl: '90vh', lg: '90vh', md: '90vh', sm: 'auto', xs: 'auto' },
        backgroundColor: (theme) => `${theme.palette.secondary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: '3em',
        flexDirection: 'column',
        gap: '2em',
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
        className='Typography--HomeInfo'
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
        className='Options--HomeInfo'
        sx={{
          width: '85%',
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
          gap: '2em',
        }}
      >
        {infoOptions.map((item) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'column',
              paddingTop: '2em',
              width: { xl: '17%', lg: '17%', md: '17%', sm: '50%', xs: '75%' },
              height: '50vh',
              textAlign: 'center',
              borderRadius: '15px',
              backgroundColor: (theme) => `${theme.palette.primary.main}`,
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            <SvgIcon
              component={item.icon}
              inheritViewBox
              sx={{
                height: {
                  xl: '100px',
                  lg: '70px',
                  md: '100px',
                  sm: '100px',
                  xs: '100px',
                },
                width: {
                  xl: '100px',
                  lg: '70px',
                  md: '100px',
                  sm: '100px',
                  xs: '100px',
                },
                color: '#BB7A39',
              }}
            />
            <Typography variant='h3' sx={{ color: '#BB7A39' }}>
              {item.title}
            </Typography>
            <Typography
              variant='h5'
              sx={{
                color: '#BB7A39',
                width: '90%',
                marginBottom: '1em',
              }}
            >
              {item.subTitle}
            </Typography>
            <Typography
              variant='h6'
              sx={{
                color: '#BB7A39',
                width: '90%',
                marginBottom: '2em',
              }}
            >
              {item.desc}
            </Typography>
            <DarkOptionsButton title={item.title} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeInfo;
