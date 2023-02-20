import { getSaludo } from '../../src/base-pruebas/02-template-string';

// snipet desc para crear el describe
describe('Prueba en 02-template-string', () => { 
    // snipet test para crear test
    test('la funcion getSaludo() debe retornar "Hola cristian"', () => { 
        const name = 'cristian';
        const msg = getSaludo(name)

        expect(msg).toBe(`Hola ${name}!!`);
     });
 });