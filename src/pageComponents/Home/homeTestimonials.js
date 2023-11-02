import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Woman from '../../assets/woman.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselStyles = {
  width: '100%',
  margin: '0 auto',
  borderRadius: '10px',
  height: 'auto',
};

const testimonialOptions = [
  {
    name: 'James Boyle',
    desc: '“The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project”',
    pic: Woman,
  },
  {
    name: 'James Boyle',
    desc: '“The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project”',
    pic: Woman,
  },
  {
    name: 'James Boyle',
    desc: '“The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project”',
    pic: Woman,
  },
  {
    name: 'James Boyle',
    desc: '“The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project”',
    pic: Woman,
  },
  {
    name: 'James Boyle',
    desc: '“The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project. The largest database of free icons for any project”',
    pic: Woman,
  },
];

const HomeTestimonial = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: (theme) => `${theme.palette.secondary.main}`,
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
        className='Typography--HomeInfo'
        sx={{ width: '100%', textAlign: 'center' }}
      >
        <Typography
          variant='h1'
          sx={{
            color: (theme) => `${theme.palette.primary.main}`,
            paddingBottom: '.1em',
          }}
        >
          Testimonials & Reviews
        </Typography>
        <Typography
          variant='h2'
          sx={{
            color: (theme) => `${theme.palette.primary.main}`,
          }}
        >
          From fulfilled clients
        </Typography>
        <Box style={carouselStyles}>
          <Carousel
            autoPlay={true}
            interval={7000}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            centerMode={true}
            swipeable={true}
          >
            {testimonialOptions.map((item) => (
              <Box
                sx={{
                  width: '35vw',
                  height: '60vh',
                  backgroundColor: (theme) => `${theme.palette.primary.main}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: (theme) =>
                    `3px solid ${theme.palette.secondary.main}`,
                  borderRadius: '15px',
                  margin: '50px auto 50px auto',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                }}
              >
                <Box
                  sx={{
                    width: '300px',
                    height: '300px',
                    backgroundImage: `url(${item.pic})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'none',
                    backgroundPosition: 'center',
                    borderRadius: '100%',
                    border: (theme) =>
                      `3px solid ${theme.palette.secondary.main}`,
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  }}
                />
                <Box
                  sx={{
                    width: '60%',
                    height: 'auto',
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
                      textAlign: 'center',
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      color: (theme) => `${theme.palette.secondary.main}`,
                      width: '100%',
                      textAlign: 'center',
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeTestimonial;
