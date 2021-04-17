import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StylesProvider} from '@material-ui/core/styles'

ReactDOM.render(
  <StylesProvider>
    <App />
  </StylesProvider>
 ,
  document.getElementById('root')
);
