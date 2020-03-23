import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import Root from './root';
import combineReducers from './combine-reducers';
import './styles.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
    ),
  ),
);

render(<Root store={store} />, document.getElementById('root'));
