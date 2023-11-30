import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Box } from '@mui/material';
import "./InputAndVisualise.css";
import { usePopup } from '../context/PopupContext';

const InputAndVisualise = () => {
  const [graphType, setGraphType] = useState('');
  const [columnNumber, setColumnNumber] = useState('');
  const [startRow, setStartRow] = useState('');
  const [endRow, setEndRow] = useState('');
  const {setPopup, setChartValue} = usePopup();

  const handleVisualizeClick = () => {
    if(graphType=='' || columnNumber=='' || startRow=='' || endRow=='') return;
    setChartValue(graphType);
    setPopup(true);
  };

  return (
    <Box className="visualise-box" p={3}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Graph Type</InputLabel>
        <Select value={graphType} onChange={(e) => setGraphType(e.target.value)}>
          <MenuItem value="Bar">Bar Graph</MenuItem>
          <MenuItem value="Line">Line Graph</MenuItem>
          <MenuItem value="Area">Area Graph</MenuItem>
          <MenuItem value="Bubble">Bubble Graph</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Column Number"
        type="number"
        value={columnNumber}
        onChange={(e) => setColumnNumber(e.target.value)}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Start Row"
        type="number"
        value={startRow}
        onChange={(e) => setStartRow(e.target.value)}
      />

      <TextField
        fullWidth
        margin="normal"
        label="End Row"
        type="number"
        value={endRow}
        onChange={(e) => setEndRow(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleVisualizeClick}>
        Visualize
      </Button>
    </Box>
  );
};

export default InputAndVisualise;
