import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import './assets/css/index.css';
import './assets/css/base.css';
import App from './pages/App';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { client } from './config'
import { ApolloProvider } from '@apollo/client'

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
