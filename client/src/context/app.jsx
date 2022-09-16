import React, { useState, createContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

function AppProvider({ children }) {
  const [type, setType] = useState('');
  const [state, setState] = useState('');
  const [results, setResults] = useState([]);

  async function fetchResults(type, state) {
    try {
      const response = await axios.get(
        `http://localhost:4000/${type}/${state}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        type,
        setType,
        state,
        setState,
        results,
        setResults,
        fetchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
