import { handleActions } from 'redux-actions'
import {getServerData} from '../actions/actionTypes'

const defaultState = {
  serverData: []
};

export default handleActions({
  [getServerData]: (state, {payload}) => ({
    ...state,
    serverData: payload,
  }),
},
  defaultState
)
