import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import myStore from './myStore';
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
  <Provider store={myStore} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

