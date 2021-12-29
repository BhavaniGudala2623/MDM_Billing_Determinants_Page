import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

export default function CurrentYear() {
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
        <AddCircleIcon/>
        
          <div>
            <TextField id="outlined-basic" label="Holiday" variant="outlined" />

        
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
        </div>

        <DatePicker
          label="Current year"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
          <IndeterminateCheckBoxIcon />
        

      </Box>
    
    </LocalizationProvider>
  );
}
