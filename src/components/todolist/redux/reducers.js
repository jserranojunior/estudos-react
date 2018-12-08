// eslint-disable-next-line
import {ADD_TASK} from './actions'




const stateInicial = {
    tarefas:[],
    posts:[]
}
       

function reducer(state = stateInicial, action){
    if(action.type === 'ADD_TASK'){        
        return{
            ...state,
            tarefas: [...state.tarefas, action.name]
        }
    }else{
        return state
    }
}

export default reducer