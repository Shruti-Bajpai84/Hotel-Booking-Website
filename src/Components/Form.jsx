import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Calender from './Calendar'


const Form = ()=>{
  return (
    <>
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className='form-box'>
        <Calender/>
      <div>
      <TextField
          label="First Name"
          id="filled-size-normal"
          defaultValue=""
          type='text'
          variant="filled"
        />
          <TextField
          label="Last Name"
          id="filled-size-normal"
          defaultValue=""
          type='email'
          variant="filled"
        />
      <div>
        
        <TextField
          label="Email id"
          id="filled-size-normal"
          defaultValue=""
          type='email'
          variant="filled"
        />
         
         <TextField
          label="Phone Number"
          id="filled-size-normal"
          defaultValue=""
          type='number'
          variant="filled"
        />
      </div>
      </div>
      <div>
       
      <TextField
          label="Room"
          id="filled-size-normal"
          defaultValue=""
          type='number'
          variant="filled"
        />
       
       <TextField
          label="Date"
          id="filled-size-normal"
          defaultValue=""
          type='date'
          variant="filled"
        />
        
      </div>
      </div>
    </Box>
  </>

  );
}

export default Form