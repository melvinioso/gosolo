import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { AppContext } from '../context/app';
import { states } from '../constants/states';

const schema = yup
  .object({
    type: yup.string().required('Type is required'),
    state: yup.string().required('State is required'),
  })
  .required();

const SearchForm = () => {
  const { type, setType, state, setState, setResults, fetchResults } =
    React.useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ type, state }) => {
    setResults([]);
    fetchResults(type, state);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100px',
        p: 1,
        m: 1,
        mb: 4,
      }}
    >
      <FormControl sx={{ mr: 2, minWidth: 175 }} size="small">
        <InputLabel id="type">Type</InputLabel>
        <Select
          {...register('type')}
          labelId="type"
          id="type"
          value={type}
          label="Type"
          error={errors.type?.message && true}
          helpertext={errors.type?.message}
          onChange={handleTypeChange}
        >
          <MenuItem value={'representatives'}>Representatives</MenuItem>
          <MenuItem value={'senators'}>Senators</MenuItem>
        </Select>
        <FormHelperText sx={{ color: 'red' }}>
          {errors.type?.message}
        </FormHelperText>
      </FormControl>
      <FormControl sx={{ mr: 2, minWidth: 175 }} size="small">
        <InputLabel id="state">State</InputLabel>
        <Select
          {...register('state')}
          labelId="state"
          id="state"
          value={state}
          label="State"
          error={errors.state?.message && true}
          helpertext={errors.state?.message}
          onChange={handleStateChange}
        >
          {states.map(({ value, name }) => {
            return (
              <MenuItem key={value} value={value}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText sx={{ color: 'red' }}>
          {errors.state?.message}
        </FormHelperText>
      </FormControl>
      <Button
        sx={{ height: '40px', mr: 2 }}
        variant="contained"
        size="small"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SearchForm;
