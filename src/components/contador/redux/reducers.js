
import {
    INCREMENTAR,
    DECREMENTAR,
  } from './actions'

  const initialState = {
    contador: 0,
  }

  function reducer(state = initialState, action){
    // eslint-disable-next-line default-case
    switch(action.type){
      case INCREMENTAR:
      return{
        contador: state.contador + 1
      };
      case DECREMENTAR:
      return{
        contador:state.contador - 1
      }
      default:
      return state
    }    
  }

  export default reducer