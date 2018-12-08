import {createStore, combineReducers} from 'redux'
import contador from '../components/contador/redux/reducers'
import placar from '../components/placar/redux/reducers'

// eslint-disable-next-line
const allReducers = combineReducers({
  contador,
  placar
})


  const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

  export default store