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
          Testimonials & Reviews
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
                  width: {
                    xl: '35vw',
                    lg: '35vw',
                    md: '35vw',
                    sm: '90%',
                    xs: '90%',
                  },
                  height: {
                    xl: '60vh',
                    lg: '60vh',
                    md: '60vh',
                    sm: '70vh',
                    xs: '65vh',
                  },
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
                    width: {
                      xl: '300px',
                      lg: '300px',
                      md: '300px',
                      sm: '300px',
                      xs: '150px',
                    },
                    height: {
                      xl: '300px',
                      lg: '300px',
                      md: '300px',
                      sm: '300px',
                      xs: '150px',
                    },
                    backgroundImage: `url(${item.pic})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'none',
                    backgroundPosition: 'center',
                    borderRadius: '100%',
                    marginBottom: {
                      xl: '0px',
                      lg: '0px',
                      md: '0px',
                      sm: '15px',
                      xs: '15px',
                    },
                    border: '3px solid #bb7a39',
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
                    variant='h3'
                    sx={{
                      color: '#bb7a39',
                      width: '100%',
                      textAlign: 'center',
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      color: '#bb7a39',
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
