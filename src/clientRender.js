import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    BrowserRouter,
    StaticRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import _reducers from './reducers';
import App from './components/App';

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const initState = {};

for (let key in window.__PRELOADED_STATE__) {
	if ({}.hasOwnProperty.call(window.__PRELOADED_STATE__, key)) {
		initState[key] = fromJS(window.__PRELOADED_STATE__[key]);
	}
}

delete window.__PRELOADED_STATE__;

const store = createStore(
    _reducers,
    initState,
    composeEnhancers(applyMiddleware(thunk)),
  );

render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
