import { contadorReducer } from "../01-redux-basic/contador/contador.reducer";
import { incrementadorAction, decrementadorAction,multiplicarAction,divirAction } from "../01-redux-basic/contador/contador.actions";


console.log( contadorReducer(10, incrementadorAction) ); //11
console.log( contadorReducer(10, decrementadorAction) ); //9
console.log( contadorReducer(10, multiplicarAction) );   //20
console.log( contadorReducer(10, divirAction) );         //5