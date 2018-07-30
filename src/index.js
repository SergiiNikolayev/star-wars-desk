import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'


import configStore from './store/configStore'
import rootReducer from './store/reducer/rootReducer'
import rootSaga from './store/saga/rootSaga'
import './index.css';
import App from './App';

//TODO: connecting store to app through Provider
const store = configStore(rootReducer, rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
