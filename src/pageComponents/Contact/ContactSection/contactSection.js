import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ContactForm from './contactForm.js';
import Facebook from '../../../assets/facebook.png';
import Instagram from '../../../assets/instagram.png';
import Twitter from '../../../assets/twitter.png';
import Youtube from '../../../assets/youtube.png';

const ContactSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: (theme) => `${theme.palette.secondary.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: '3em',
        flexDirection: 'column',
        gap: '2em',
      }}
    >
      <Box
        className='Typography--ContactSection'
        sx={{
          width: '85%',
          textAlign: 'center',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            color: (theme) => `${theme.palette.primary.main}`,
            paddingBottom: '.1em',
          }}
        >
          Contact me today
        </Typography>
      </Box>
      <Box
        className='Typography--FormSection'
        sx={{
          width: '85%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: '2em',
        }}
      >
        <Box
          sx={{
            width: {
              xl: '40%',
              lg: '50%',
              md: '60%',
              sm: '90%',
              xs: '100%',
            },
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: {
              xl: '0px',
              lg: '0px',
              md: '50px',
              sm: '50px',
              xs: '50px',
            },
            marginTop: {
              xl: '0px',
              lg: '0px',
              md: '50px',
              sm: '50px',
              xs: '50px',
            },
          }}
        >
          <ContactForm />
        </Box>
        <Box
          sx={{
            height: {
              xl: '60vh',
              lg: '60vh',
              md: 'auto',
              sm: 'auto',
              xs: 'auto',
            },
            width: {
              xl: '40%',
              lg: '40%',
              md: '100%',
              sm: '100%',
              xs: '100%',
            },
            marginBottom: '50px',
          }}
        >
          <Box
            sx={{
              height: '200px',
              width: '100%',
              borderBottom: '1px solid #E4DCC0',
            }}
          >
            <Typography
              variant='h3'
              sx={{
                color: (theme) => `${theme.palette.primary.main}`,
                fontStyle: 'italic',
              }}
            >
              Address
            </Typography>
            <Typography
              variant='h4'
              sx={{
                color: (theme) => `${theme.palette.primary.main}`,
                paddingTop: '30px',
              }}
            >
              11601 Highbury Way
            </Typography>
            <Typography
              variant='h5'
              sx={{
                color: (theme) => `${theme.palette.primary.main}`,
              }}
            >
              Get in touch for more info!
            </Typography>
          </Box>
          <Box
            sx={{
              height: 'auto',
              width: '100%',
              display: 'flex',
              paddingTop: '30px',
              flexDirection: {
                xl: 'row',
                lg: 'row',
                md: 'row',
                sm: 'column',
                xs: 'column',
              },
              borderBottom: {
                xl: '1px solid #E4DCC0',
                lg: '1px solid #E4DCC0',
                md: '1px solid #E4DCC0',
                sm: 'none',
                xs: 'none',
              },
            }}
          >
            <Box
              sx={{
                height: '170px',
                width: '100%',
                borderBottom: {
                  xl: 'none',
                  lg: 'none',
                  md: 'none',
                  sm: '1px solid #E4DCC0',
                  xs: '1px solid #E4DCC0',
                },
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  color: (theme) => `${theme.palette.primary.main}`,
                  fontStyle: 'italic',
                }}
              >
                Telephone
              </Typography>
              <Typography variant='h4'>
                <a
                  href='tel:7274879698'
                  style={{
                    color: '#FEFAE0',
                    textDecoration: 'none',
                  }}
                >
                  216-856-2205
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                height: '170px',
                width: '100%',
                borderBottom: {
                  xl: 'none',
                  lg: 'none',
                  md: 'none',
                  sm: '1px solid #E4DCC0',
                  xs: '1px solid #E4DCC0',
                },
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  color: (theme) => `${theme.palette.primary.main}`,
                  fontStyle: 'italic',
                }}
              >
                Email
              </Typography>
              <Typography
                variant='h4'
                sx={{
                  color: (theme) => `${theme.palette.primary.main}`,
                  fontStyle: 'italic',
                }}
              >
                Jamesdev4you@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: '200px',
              width: '100%',
              marginTop: '30px',
            }}
          >
            <Typography
              variant='h3'
              sx={{
                color: '#FEFAE0',
                fontStyle: 'italic',
                marginBottom: '5%',
              }}
            >
              Social Medias
            </Typography>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '5%',
              }}
            >
              <Link href='https://www.instagram.com/petersonedvania/'>
                <Box
                  sx={{
                    height: {
                      xl: '60px',
                      lg: '60px',
                      md: '60px',
                      sm: '60px',
                      xs: '40px',
                    },
                    width: {
                      xl: '60px',
                      lg: '60px',
                      md: '60px',
                      sm: '60px',
                      xs: '40px',
                    },
                    backgroundImage: `url(${Facebook})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    cursor: 'pointer',
                  }}
                ></Box>
              </Link>
              <Link href='https://www.instagram.com/petersonedvania/'>
                <Box
                  sx={{
                    height: {
                      xl: '60px',
                      lg: '60px',
                      md: '60px',
                      sm: '60px',
                      xs: '40px',
                    },
                    width: {
                      xl: '60px',
                      lg: '60px',
                      md: '60px',
                      sm: '60px',
                      xs: '40px',
                    },
                    backgroundImage: `url(${Instagram})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    cursor: 'pointer',
                  }}
                ></Box>
              </Link>
              <Link href='https://www.instagram.com/petersonedvania/'>
                <Box
                  sx={{
                    height: {
                      xl: '60px',
                      lg: '60px',
                      md: '60px',
                      sm: '60px',
                      xs: '40px',
                    },
                    width: {
                      xl: '60px',
                      lg: '60px',
                      md: '60px',
                      sm: '60px',
                      xs: '40px',
                    },
                    backgroundImage: `url(${Twitter})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    cursor: 'pointer',
                  }}
                  src='#'
                ></Box>
              </Link>
              <Link href='https://www.instagram.com/petersonedvania/'>
                <Box
                  sx={{
                    height: {
                      xl: '60px',
                      lg: '60px',
                      md: '60px',
                      sm: '60px',
                      xs: '40px',
                    },
                    width: {
                      xl: '60px',
                      lg: '60px',
                      md: '60px',
                      sm: '60px',
                      xs: '40px',
                    },
                    backgroundImage: `url(${Youtube})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    cursor: 'pointer',
                  }}
                  src='https://www.instagram.com/petersonedvania/'
                ></Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
