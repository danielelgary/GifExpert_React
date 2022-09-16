import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategories } from './../../src/components/AddCategories'

describe('Pruebas al componente: <AddCategories />', () => { 
    
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategories onNewCategory={ () => {} }/>);
        screen.debug();

        /*
        Si se observa lo que imprime el screen.debug() en este punto, 
        nos daremos cuenta que el input esta percibiendo un value que
        hasta el momento esta vacio, cuando se analiza que deberia de pasar
        dentro del componente, nos damos cuenta que este value lo afecta el 
        valor de un evento onChange que le dice al HOOK que actualice el valor
        de la variable, por lo cual lo que se debe hacer como prueba es:
        1. disparar el evento onChange para cambiarle algo al valor.
        2. verificar si el valor coincide con el que se cambio o si si es diferente.
        */

        //Para disparar el evento, debemos referenciar el elemento que lo contiene
        // Nota: los input se buscan por ROL -> textbox
        const input = screen.getByRole('textbox');

        //Disparar el evento:
        /* 
            Hay que tener en cuenta el flujo para poder disparar los eventos:
            1. el fireEvent dispara el evento
            2. si el evento llama una funcion, que recibe esta funcion?
            3. si recibe el evento, de que manera lo recibe? Desestructurado? (en este caso: target)
            4. a eso que recibe, que dato le interesa obtener? es decir, 
               la parte desestructurada, que dato llevaba consigo (en este caso: target.value)
            5. todo esto igual, es lo que debemos proporcionar para el evento.
            6. todo se proporciona a traves del fireEvent a traves del options.
        */
        fireEvent.input( input, {target: { value: 'Saitama'}} );

        //Si miramos el screen en este punto, veremos que ya se afecto el value
        screen.debug();

        expect(input.value).toBe('Saitama');

     });

     test('Debe llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Dragon Ball';

        //Se declara la funcion MOCK para evaluar
        const onNewCategory = jest.fn();

        render(<AddCategories onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox'); 

        //El form debe llamarse usando tambien un ariaLabel
        const form = screen.getByRole('form'); 

        fireEvent.input( input, {target: { value: inputValue}} );
        fireEvent.submit( form );

        //Esto es posible, porque el screen.getByRole('textbox') pasa por referencia
        //es decir, si se afecta, esta afecta la variable, entonces aqui en este
        //punto, ya deberia de estar actualizado, pues el componente borra el valor
        expect(input.value).toBe('');

        /*
            Falta evaluar que al entrar al onSubmit del componente, se llame la funcion
            onNewCategory, para esto se utilizan JEST FUNCTIONS.
            Para enviar una funcion (MOCK) que simule lo que haria la funcion
        */
        //Esta prueba solo me avisa si la prueba fue llamada
        expect(onNewCategory).toHaveBeenCalled();
        //Esta prueba me avisa si la prueba fue llamada 1 vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //Esta prueba me avisa si la prueba fue llamada con un argumento
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
      });

      test('No debe llamar onNewCategory si el input esta vacio', () => { 
        
        const onNewCategory = jest.fn();

        render(<AddCategories onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form'); 
        fireEvent.submit( form );

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
      });
 });