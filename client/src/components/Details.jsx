import './Details.css';
import React from 'react';
import { transform } from 'lodash';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { AppContext } from '../context/app';

const Details = () => {
  const { details } = React.useContext(AppContext);

  const capitalizedKeys = transform(details, (result, val, key) => {
    result[key.charAt(0).toUpperCase() + key.slice(1)] = val;
  });

  const renderDetailsList = () => {
    if (!details) {
      return null;
    }

    return Object.entries(capitalizedKeys).map(([key, value]) => {
      return (
        <ListItem key={key} className="details-list-item">
          <ListItemText primary={`${key}: ${value}`} />
        </ListItem>
      );
    });
  };

  return (
    <div>
      <Typography variant="h4" sx={{ color: '#1e85f7', marginBottom: '25px' }}>
        Info
      </Typography>
      <List>{renderDetailsList()}</List>
    </div>
  );
};

export default Details;
