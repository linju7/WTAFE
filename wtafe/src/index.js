import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM 대신 ReactDOM.createRoot를 사용
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot 사용
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);