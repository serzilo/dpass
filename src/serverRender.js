import 'babel-polyfill';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  StaticRouter,
} from 'react-router-dom';

import App from './components/App';

import _reducers from './reducers';

function renderStoreRouter(store, req, res) {
	const context = {};
	const componentStr = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
	);
	res.render('index', {
		preloadedState: `${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}`,
		html: process.env.NODE_ENV === 'production' ? componentStr : `<div>${componentStr}</div>`,
	});
}

function serverRender(req, res) {
  const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const store = createStore(
      _reducers,
      composeEnhancers(applyMiddleware(thunk))
    );

    let initState = (store,req,res) => {
        return (dispatch, getState) => {
            return new Promise( (resolve, reject)=> {
                resolve();
            });
        }
    };

  store.dispatch(initState(store,req,res))
    .then( () => {
      renderStoreRouter(store, req, res);
    });
}

module.exports = serverRender;
