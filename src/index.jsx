import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { Provider } from 'react-redux';
import Game from './components/game';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const client = axios.create({
  baseURL: 'https://us-central1-okonomisimulator.cloudfunctions.net/',
  responseType: 'json',
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(axiosMiddleware(client))),
);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
);
