export const ADD_GOL_CASA = 'ADD_GOL_CASA'
export const ADD_GOL_VISITANTE = 'ADD_GOL_VISITANTE'


export function add_gol_casa(text) {
    return { type: ADD_GOL_CASA, text }
  }

  export function add_gol_visitante(text) {
    return { type: ADD_GOL_VISITANTE, text }
  }
