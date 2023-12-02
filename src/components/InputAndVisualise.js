import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Box } from '@mui/material';
import "./InputAndVisualise.css";
import { usePopup } from '../context/PopupContext';
import ErrorAlert from './Alert';
import { useTheme } from '../context/ThemeContext';

const InputAndVisualise = () => {
  const [graphType, setGraphType] = useState('');
  const [columnNumber, setColumnNumber] = useState('');
  const [startRow, setStartRow] = useState('');
  const [endRow, setEndRow] = useState('');
  const {setPopup, setChartValue} = usePopup();
  const [open, setOpen] = useState(false);
  const {theme} = useTheme();

  const handleVisualizeClick = () => {
    // Form validation by giving alert on not filling all the input fields.
    if(graphType=='' || columnNumber=='' || startRow=='' || endRow==''){
      setOpen(true);
      return;
    }
    // Using context and global state variables to show respective graphs.
    setChartValue(graphType);
    setPopup(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <Box className={`visualise-box ${theme=="Dark" ? "dark-box" :null}`} p={3}>
      <FormControl className={`${theme=="Dark" ? "form-dark2" :null}`} required={true} variant="filled" fullWidth margin="normal">
        <InputLabel>Graph Type</InputLabel>
        <Select className={`${theme=="Dark" ? "select-dark":null}`} value={graphType} onChange={(e) => setGraphType(e.target.value)}>
          <MenuItem value="Bar">Bar Graph</MenuItem>
          <MenuItem value="Line">Line Graph</MenuItem>
          <MenuItem value="Area">Area Graph</MenuItem>
          <MenuItem value="Bubble">Bubble Graph</MenuItem>
        </Select>
      </FormControl>

      <TextField
        className={`${theme=="Dark" ? "input-dark" :null}`}
        required={true}
        fullWidth
        margin="normal"
        label="Column Number"
        type="number"
        value={columnNumber}
        onChange={(e) => setColumnNumber(e.target.value)}
      />

      <TextField
        className={`${theme=="Dark" ? "input-dark" :null}`}
        required={true}
        fullWidth
        margin="normal"
        label="Start Row"
        type="number"
        value={startRow}
        onChange={(e) => setStartRow(e.target.value)}
      />

      <TextField
        className={`${theme=="Dark" ? "input-dark" :null}`}
        required={true}
        fullWidth
        margin="normal"
        label="End Row"
        type="number"
        value={endRow}
        onChange={(e) => setEndRow(e.target.value)}
      />

      <Button title='Visualize' variant="contained" color="primary" onClick={handleVisualizeClick}>
        Visualize
      </Button>
      <ErrorAlert open={open} handleClose={handleClose}/>
    </Box>
  );
};

export default InputAndVisualise;
