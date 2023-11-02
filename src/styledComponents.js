import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DarkOptionsButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '160px',
      height: '40px',
      backgroundColor: (theme) => `${theme.palette.secondary.main}`,
      color: (theme) => `${theme.palette.primary.main}`,
      '&:hover': {
        backgroundColor: '#bb7a39',
        fontWeight: 'bold',
        border: (theme) => `1px solid ${theme.palette.secondary.main}`,
      },
      borderRadius: '25px',
      border: (theme) => `1px solid ${theme.palette.primary.main}`,
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    }}
    href='/contact'
  >
    <Typography variant='h5' sx={{ marginBottom: '5px' }}>
      {props.title}
    </Typography>
  </Button>
);

const LightOptionsButton = (props) => (
  <Button
    variant='contained'
    sx={{
      margin: 'auto',
      paddingLeft: '15px',
      width: 'auto',
      height: '50px',
      backgroundColor: '#FAEDCD',
      color: '#D4A373',
      '&:hover': {
        color: '#bb7a39',
        backgroundColor: '#FAEDCD',
        border: '2px solid #bb7a39',
        fontWeight: 'bold',
      },
      borderRadius: '25px',
      border: (theme) => `3px solid ${theme.palette.secondary.main}`,
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    }}
    onClick={() => {
      props.onClick();
    }}
  >
    <Typography variant='h4' sx={{ marginBottom: '10px' }}>
      {props.title}
    </Typography>
  </Button>
);

export { DarkOptionsButton, LightOptionsButton };
