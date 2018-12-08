
export const ADD_TASK = 'ADD_TASK'

export function add(name){
    return {
        type: ADD_TASK,
        name: name,
    } 
}