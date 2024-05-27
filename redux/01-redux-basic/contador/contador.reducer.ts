import { Action } from "../ngrx-fake/ngrx";

// Este es el reducer
export function contadorReducer( state = 10, action: Action ) {

    switch ( action.type ) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
    
        default:
            return state;
    }
}