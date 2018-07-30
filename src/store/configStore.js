import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const configStore = (rootReducer, rootSaga) => {
  const middleWare = [];
  const saga = createSagaMiddleware();
  middleWare.push(saga);
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));
  saga.run(rootSaga);
  return store;
};

export default configStore;
