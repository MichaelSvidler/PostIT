import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StylesProvider} from '@material-ui/core/styles'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
  <Provider store = {store}>
    <StylesProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </StylesProvider>
  </Provider>
 ,
  document.getElementById('root')
);

