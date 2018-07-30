import {takeEvery} from 'redux-saga'
import {call, put, takeLatest, take} from 'redux-saga/effects'

import {getServerData} from '../actions/actionTypes'

getDataAsync

export function* getDataAsync(action) {
  try {
    console.log("Buzzinga!" + action.payload)
  }
  catch (e) {
    console.log(e);
  }
}

export function* watchSaga() {
  yield takeEvery(getServerData, getDataAsync);
}

export default function* rootSaga() {
  yield [
    watchSaga()
  ]
}
