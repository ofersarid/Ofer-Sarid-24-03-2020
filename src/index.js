import React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'toasted-notes/src/styles.css';
import combineReducers from './combine-reducers';
import './styles.scss';
import App from './app/app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHashHistory();
const store = createStore(
  combineReducers(history),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
);

render(
  <Provider store={store} >
    <ConnectedRouter history={history} >
      <Route path="/" >
        <App history={history} />
      </Route >
    </ConnectedRouter >
  </Provider >,
  document.getElementById('root')
);
