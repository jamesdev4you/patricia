import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const DarkOptionsButton = (props) => (
  <Button
    variant='contained'
    sx={{
      padding: '15px',
      minWidth: '150px',
      height: '40px',
      backgroundColor: '#BB7A39',
      color: (theme) => `${theme.palette.primary.main}`,
      '&:hover': {
        backgroundColor: '#c88949',
        fontWeight: 'bold',
        border: '#BB7A39',
      },
      borderRadius: '25px',
      border: (theme) => `2px solid ${theme.palette.secondary.main}`,
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      fontSize: {
        xl: '16px',
        lg: '16px',
        md: '16px',
        sm: '12px',
        xs: '12px',
      },
      fontWeight: 'bold',
    }}
    href='/contact'
  >
    {props.title}
  </Button>
);

const LightOptionsButton = (props) => (
  <Button
    variant='contained'
    sx={{
      padding: '15px',
      minWidth: '150px',
      marginRight: 'auto',
      height: '35px',
      backgroundColor: '#FAEDCD',
      color: '#bb7a39',
      '&:hover': {
        color: '#D4A373',
        backgroundColor: '#FAEDCD',
        border: (theme) => `2px solid ${theme.palette.secondary.main}`,
        fontWeight: 'bold',
      },
      borderRadius: '20px',
      border: '2px solid #bb7a39',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',

      fontSize: {
        xl: '16px',
        lg: '16px',
        md: '16px',
        sm: '12px',
        xs: '12px',
      },
      fontWeight: 'bold',
    }}
    onClick={() => {
      props.onClick();
    }}
  >
    {props.title}
  </Button>
);

const LightPhoneButton = (props) => (
  <Button
    variant='contained'
    sx={{
      margin: 'auto',
      paddingLeft: '15px',
      width: 'auto',

      height: '50px',
      backgroundColor: '#FAEDCD',
      color: '#bb7a39',
      '&:hover': {
        color: '#D4A373',
        backgroundColor: '#FAEDCD',
        border: (theme) => `2px solid ${theme.palette.secondary.main}`,
        fontWeight: 'bold',
      },
      fontSize: '20px',
      fontWeight: 'bold',
      borderRadius: '25px',
      border: '3px solid #bb7a39',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    }}
  >
    <Link href='tel:14159423491' sx={{ textTransform: 'none' }}>
      Call Now
    </Link>
  </Button>
);

export { DarkOptionsButton, LightOptionsButton, LightPhoneButton };
