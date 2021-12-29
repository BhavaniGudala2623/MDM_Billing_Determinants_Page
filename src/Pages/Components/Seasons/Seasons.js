import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


export default function Seasons() {
  const [value, setValue] = React.useState(null);

  return (
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
       <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
      <div>
      <Typography  variant='h7' gutterBottom >Season 1</Typography>
      
      <DatePicker
        label="Start Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        
        renderInput={(params) => <TextField {...params} />
    }
      />
       
       <DatePicker
        label="End Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        
        renderInput={(params) => <TextField {...params} />
    }
      />
       </div>
      <Button
        onClick={() => {
          alert('After submitting data cannot be deleted, would you like to proceed?');
        }}
      >
        submit
      </Button>
      <Button
        onClick={() => {
          alert('error');
        }}
      >
        clear
      </Button>
     
      
      </Box>
      
    </LocalizationProvider>
  );
}