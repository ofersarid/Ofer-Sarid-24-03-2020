import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './root';
import combineReducers from './combine-reducers';

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(<Root store={store} />, document.getElementById('root'));
