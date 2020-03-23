import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './root';
import combineReducers from './combine-reducers';

const store = createStore(combineReducers);

render(<Root store={store} />, document.getElementById('root'));
