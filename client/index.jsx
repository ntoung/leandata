'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { reducers, initialState } from './reducers';

const store = createStore(reducers, initialState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {routes(store)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
