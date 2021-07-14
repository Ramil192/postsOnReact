import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './App';
import { rootReducer } from './Redux/Reducer/rootReducer';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './Redux/Sagas/sagas';

const saga= createSagaMiddleware()

const store = createStore(rootReducer,compose(applyMiddleware(
  thunk,saga
),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
render(app, document.getElementById('root'));
