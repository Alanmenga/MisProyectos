import { usuarioIngresadoTrue,usuarioIngresadoFalse } from "./booleanos";

describe('Pruebas de Booleanos', () => {
    it('Debe de retornar true', () => {
        const res = usuarioIngresadoTrue();
        expect(res).toBeTruthy();
    });
    it('Debe de retornar false', () => {
        const res = usuarioIngresadoFalse();
        expect(res).not.toBeTruthy();
        //expect(res).toBeFalsy();
    });
})