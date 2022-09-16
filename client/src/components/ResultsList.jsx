import React from 'react';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { AppContext } from '../context/app';

const ResultsList = () => {
  const { type, state, results } = React.useContext(AppContext);

  return (
    <div>
      <Typography variant="h4" sx={{ color: '#1e85f7', marginBottom: '25px' }}>
        List {type} {state && `in ${state}`}
      </Typography>
      <TableContainer component={Paper} sx={{ width: '50vh' }}>
        <Table aria-label="results table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Party</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow
                key={result.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {result.name}
                </TableCell>
                <TableCell align="right">{result.party}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ResultsList;
