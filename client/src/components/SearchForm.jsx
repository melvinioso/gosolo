import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { states } from '../constants/states';

const SearchForm = () => {
  const [type, setType] = useState('');
  const [state, setState] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          value={type}
          label="Type"
          onChange={handleTypeChange}
        >
          <MenuItem value={'representative'}>Representative</MenuItem>
          <MenuItem value={'senator'}>Senator</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
        <InputLabel id="state">State</InputLabel>
        <Select
          labelId="state"
          id="state"
          value={state}
          label="State"
          onChange={handleStateChange}
        >
          {states.map((state) => {
            return (
              <MenuItem key={state.value} value={state.value}>
                {state.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SearchForm;
