import {createStore, combineReducers} from 'redux'
import contador from '../components/contador/redux/reducers'
import placar from '../components/placar/redux/reducers'
import todolist from '../components/todolist/redux/reducers'
import financeiro from '../components/financeiro/redux/reducers'

// eslint-disable-next-line
const allReducers = combineReducers({
  contador,
  placar,
  todolist,
  financeiro
})


  const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

  export default store