import { handleActions } from 'redux-actions'
import {getServerData, mainRequestGood} from '../actions/actionTypes'

const initialState = {
  serverData: [],
  nextPage: '#'
};

const reducerOne = (state = initialState, action) => {
  switch (action.type){
    case getServerData:
      return {
        ...state,
      };
    case mainRequestGood:
      return {
        ...state,
        serverData: action.serverDataX.results,
        nextPage: action.nextPageX.next
      };
    default:
      return state;
  }
};
export default reducerOne;
