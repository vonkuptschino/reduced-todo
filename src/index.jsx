import React from 'react';
import { render as r } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducers';
import App from './App';


const store = createStore(taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

r(
  <Provider store={store}><App /></Provider>,
  document.querySelector('.cont'),
);

export { store };
