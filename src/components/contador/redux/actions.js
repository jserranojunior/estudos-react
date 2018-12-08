export const INCREMENTAR = 'INCREMENTAR'
export const DECREMENTAR = 'DECREMENTAR'


export function decrementar(text) {
    return { type: INCREMENTAR, text }
  }

  export function incrementar(text) {
    return { type: DECREMENTAR, text }
  }

