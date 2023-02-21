import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Prueba al componenete 07-deses-arr', () => { 
    test('retornaArreglo que retorna un string y un numero', () => { 
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        console.log(typeof letters);
        console.log(typeof numbers);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // validar cualquier mmensaje de tipo string
        expect(typeof letters).toEqual(expect.any(String));
     })
 })