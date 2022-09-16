import ReactDOM from 'react-dom/client';
import { Container, Typography } from '@mui/material';

import ResultsList from './components/ResultsList';
import SearchForm from './components/SearchForm';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <Container maxWidth="false">
      <Typography variant="h3" sx={{ color: '#1e85f7', marginBottom: '25px' }}>
        Who's My Represetative
      </Typography>
      <SearchForm />
      <ResultsList />
    </Container>
  );
};

root.render(<App />);
