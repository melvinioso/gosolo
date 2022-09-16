import React, { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [type, setType] = useState('');
  const [state, setState] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log('type', type);
    console.log('state', state);
    console.log('results', results);
  }, [type, state, results]);

  return (
    <AppContext.Provider
      value={{
        type,
        setType,
        state,
        setState,
        results,
        setResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
