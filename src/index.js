import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './Redux';
import { Provider } from 'react-redux';
import { GlobalStyles } from './Static/GlobalStyles.style';
import { ThemeProvider } from 'styled-components';
import Theme from './Static/MainTheme';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <ThemeProvider theme={Theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);


