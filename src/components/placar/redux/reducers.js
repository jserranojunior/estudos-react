import { ADD_GOL_CASA } from './actions'
import { ADD_GOL_VISITANTE } from './actions'

const stateInitial ={
    golsVisitante: 0,
    golsCasa:0,
}

function reducer(state = stateInitial, action){
    switch(action.type){
        case ADD_GOL_CASA:
        return{
           golsCasa: state.golsCasa + 1,
           golsVisitante: state.golsVisitante
        };
        case ADD_GOL_VISITANTE:
        return{
           golsVisitante: state.golsVisitante + 1,
           golsCasa: state.golsCasa
        };
        default:
        return state
    }
}

export default reducer