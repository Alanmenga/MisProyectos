import { Action, createReducer, on } from "@ngrx/store";
import { decrementar, incrementar, multiplicar, dividir, resetear } from "./contador.actions";


// export function contadorReducer( state: number = 10, action: Action ) {
//     switch ( action.type ) {
//         case incrementar.type:
//             return state + 1;
        
//         case decrementar.type:
//             return state - 1;

//         default:
//             return state;
//     }
// }

export const initialState = 20;

const _contadorReducer = createReducer(initialState, 
on(incrementar, state => state + 1),
on(decrementar, state => state -1),
// on(multiplicar, ( state, props ) => state * props.numero ),
on(multiplicar, ( state, { numero } ) => state * numero ),
on(dividir,     ( state , { numero } ) => state / numero ),
on(resetear,    ( state  ) => initialState ),
);

export function contadorReducer(state: number | undefined, action: Action) {
    return _contadorReducer(state, action);
}