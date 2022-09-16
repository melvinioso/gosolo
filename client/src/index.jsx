import './index.css';
import ReactDOM from 'react-dom/client';
import { Container, Typography } from '@mui/material';

import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList';
import Details from './components/Details';

import { AppProvider } from './context/app';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <AppProvider>
      <Container maxWidth="false">
        <Typography
          variant="h4"
          sx={{ color: '#1e85f7', marginBottom: '25px' }}
        >
          Who's My Representative
        </Typography>
        <SearchForm />
        <div className="results">
          <ResultsList />
          <Details />
        </div>
      </Container>
    </AppProvider>
  );
};

root.render(<App />);
