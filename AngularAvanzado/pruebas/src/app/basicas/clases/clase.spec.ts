import { Jugador } from "./clase";

describe('Pruebas de clase', () => {
    let jugador = new Jugador(); 

    // beforeAll();
    beforeEach(() => {
        jugador = new Jugador(); 
    });
    // afterAll();
    // afterEach();

    it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    });
    it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    });
    it('Debe de retornar 0 de hp, si recibe 110 de daño', () => {
        const resp = jugador.recibeDanio(110);
        expect(resp).toBe(0);
    });
});