import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Test en 05-funciones', () => { 
    test('la funcion getUser() debe retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        // console.log(user);

        //comporar la respuesta
        expect(testUser).toEqual(user);
     });

     test('La funcion getUsuarioActivo() debe retornar un objero', () => { 
        const name1 = 'maria';
        const userNew = {
            uid: 'ABC567',
            username: name1
        }
        const userInfo = getUsuarioActivo(name1);
        // console.log(userInfo);
        expect(userNew).toEqual(userInfo);
      });
 })