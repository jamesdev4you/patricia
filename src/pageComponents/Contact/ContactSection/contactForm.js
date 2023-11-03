import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function ContactForm() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#FEFAE0',
        padding: '20px',
        borderRadius: '15px',
      }}
    >
      <Typography variant='h2' sx={{ color: '#BB7A39' }}>
        Contact
      </Typography>
      <Typography variant='h6' sx={{ color: '#BB7A39' }}>
        <span style={{ color: 'red' }}>*</span> INDICATES REQUIRED FIELD!
      </Typography>
      <form
        style={{
          paddingTop: '5px',
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              name='user_firstname'
              label='First Name'
              placeholder='Enter First Name'
              variant='outlined'
              fullWidth
              required
              color='secondary'
              sx={{
                '& label.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#D4A373',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&:hover fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#D4A373',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#BB7A39',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              name='user_lastname'
              label='Last Name'
              placeholder='Enter Last Name'
              variant='outlined'
              fullWidth
              color='error'
              sx={{
                '& label.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#D4A373',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&:hover fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#D4A373',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#BB7A39',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              type='email'
              name='user_email'
              label='Email'
              placeholder='Enter email'
              variant='outlined'
              fullWidth
              required
              color='error'
              sx={{
                '& label.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#D4A373',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&:hover fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#D4A373',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#BB7A39',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              type='number'
              name='user_phone'
              label='Number'
              placeholder='Enter Phone Number'
              variant='outlined'
              fullWidth
              required
              color='error'
              sx={{
                '& label.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#D4A373',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&:hover fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#D4A373',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#BB7A39',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              label='Message'
              name='message'
              multiline
              rows={4}
              placeholder='Enter information about your issue here'
              variant='outlined'
              fullWidth
              required
              color='error'
              sx={{
                '& label.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root': {
                  color: '#BB7A39',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#BB7A39',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#D4A373',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&:hover fieldset': {
                    borderColor: '#BB7A39',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#D4A373',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#BB7A39',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <Button
              type='submit'
              value='Send'
              variant='contained'
              fullWidth
              color='error'
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
