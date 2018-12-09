import {GET_CONTAS} from './actions'
import initialState from './states'


export default (state = initialState, action) => {
  switch (action.type) {

  case GET_CONTAS:
    return { ...state }

  default:
    return state
  }
}
