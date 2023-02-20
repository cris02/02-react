
describe('Prueba en el componente <DemoComponent />', () => {

    test('Esta es una prueba demo', () => { 
    
        /* 
            FASE DE LAS PRUEBA
    
            1. Inicializacion
            2. Estimulo
            3.Observar el comportamiento 
        */
    
        //paso 1
        const msg = 'hola mundo';
    
        //paso 2
        const msg2 = msg.trim();
    
        //paso 3
        // se espera que msg sea igual a msg2
        expect(msg).toBe(msg2)
        
     });

});
