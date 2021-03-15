import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './App';
import store from './app/store';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from "./GlobalStyles";
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
