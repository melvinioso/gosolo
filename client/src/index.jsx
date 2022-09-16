import ReactDOM from 'react-dom/client';
import { Container, Typography } from '@mui/material';

import ResultsList from './components/ResultsList';
import SearchForm from './components/SearchForm';
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
        <ResultsList />
      </Container>
    </AppProvider>
  );
};

root.render(<App />);
