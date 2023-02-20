import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Test en 08-imp-exp', () => { 
    test('Obtener la informacion de getHeroeById(id) de un heroe por id', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        // console.log(heroe);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
     });


     test('getHeroeById() debe retornar undefined si no existe el heroe', () => { 
        const id = 100;
        const heroe = getHeroeById(id);
        // console.log(heroe);
        expect(heroe).toBeFalsy(); // funcion que retorna un valor indefinido o null
     });


     test('getHeroesByOwner(owner) debe retornar un arreglo de 3 elementos DC', () => { 
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        // console.log(heroesDC);
        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );

        // otra manera
        expect(heroesDC).toEqual(heroes.filter(heroe => heroe.owner===owner));
     });
 });