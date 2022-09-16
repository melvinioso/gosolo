import React from 'react';

import { AppContext } from '../context/app';

const ResultsList = () => {
  const { results } = React.useContext(AppContext);

  return <div>{results.map((result) => result.name)}</div>;
};

export default ResultsList;
