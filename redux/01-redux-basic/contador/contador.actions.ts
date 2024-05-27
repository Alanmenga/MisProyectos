import { Action } from "../ngrx-fake/ngrx";

// Estas son las acciones
export const incrementadorAction: Action = {
    type:'INCREMENTAR'
};
export const decrementadorAction: Action = {
    type:'DECREMENTAR'
};
export const multiplicarAction: Action = {
    type:'MULTIPLICAR',
    payload: 2
};
export const divirAction: Action = {
    type:'DIVIDIR',
    payload: 2
};