import {takeEvery} from 'redux-saga'
import {call, put, takeLatest, take} from 'redux-saga/effects'
import axios from 'axios'

import {getServerData, mainRequestGood} from '../actions/actionTypes'

//03 workers
export function* getDataAsync(action) {
  try {
    console.log("Buzzinga!");
    let response = yield call(axios.get, 'https://swapi.co/api/people');
    console.log(action);
    console.log(response.data.results);
    console.log(response.data.next);
    yield put({type: mainRequestGood, serverDataX: response.data, nextPageX: response.data});
    /*nextPageX: response.data.next*/
  }
  catch (e) {
    console.log(e);
  }
}

//02
export function* watchSaga() {
  yield takeEvery(getServerData, getDataAsync);
}

//01
export default function* rootSaga() {
  yield [
    watchSaga()
  ]
}
