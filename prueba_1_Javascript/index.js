/*
Debe poder resolver las 4 operaciones básicas: suma, resta, multiplicación y división. Cada una debe corresponder con una función.
Cada operación debe recibir dos operandos. 
Solo debe recibir números en cada operando. En el caso de que se envíe otro valor, debe mostrar un mensaje de error.
Debe contener una función main donde se envíe como parámetros el primer operando, el segundo operando y la operación. 

Ayuda: Se puede implementar con un IF o con SWITCH en base a la operación a realizar.

Realizar varios ejemplos de ejecución con distintos tipos de datos enviados como operandos.El programa debe generar una salida controlada de error en los siguientes casos:
*/

//Debe poder resolver las 4 operaciones básicas: suma, resta, multiplicación y división. Cada una debe corresponder con una función.

const suma = (valor1, valor2) => valor1 + valor2;

console.log(suma(2,4))

const restar = (valor1, valor2) => valor1 - valor2;

console.log(restar(2,4))

const multiplicar = (valor1, valor2) => valor1 * valor2;

console.log(multiplicar(2,4))

const dividir = (valor1, valor2) => valor1 / valor2;

console.log(dividir(2,4))


// let suma = ( num1, num2  ) => {
//     if( typeof num1  === 'number' && typeof num2 === 'number' ) {
//         return num1 + num2;
//     }
//     return 'Por favor, ingrese solo números';
// }


// let resta = ( num1 , num2 ) => {

//     if( typeof num1  === 'number' && typeof num2 === 'number' ) {
//         if( num1 > num2 ) {
//             return num1 - num2;
//         }
//         return num2 - num1;

//     }   
// }

// let multiplicar = ( num1 , num2 ) => {
//     if( typeof num1  === 'number' && typeof num2 === 'number' ) {
//         return num1 * num2;
//     }
// }

// let dividir = ( num1, num2 ) => {
//     if( typeof num1  === 'number' && typeof num2 === 'number' ) {
//         return num1 / num2;
//     }
// }



// let calcular = ( num1, num2, operacion ) => {

//     switch ( operacion ) {

//         case 'suma': 
//             return suma( num1, num2 );
//         case 'resta':
//             return resta( num1, num2);
            
//         case 'dividir':
//             return dividir( num1, num2 );
            
//         case 'multiplicar':
//             return multiplicar( num1, num2 );    
            
//         default:
//             'ingrese datos correctos'
//     }

// }


let Calculadora = {
   calcular : function name(num1, num2, operacion) {
    switch ( operacion ) {

        case 'suma': 
            return suma( num1, num2 );
        case 'resta':
            return restar( num1, num2);
            
        case 'dividir':
            return dividir( num1, num2 );
            
        case 'multiplicar':
            return multiplicar( num1, num2 );    
            
        default:
            'ingrese datos correctos'
    }
   }
}

let resultadoSuma = Calculadora.calcular( 2, 5, 'suma');
console.log( resultadoSuma );
let resultadoResta = Calculadora.calcular( 2, 5, 'resta');
console.log( resultadoResta );
let resultadoDividir = Calculadora.calcular( 2, 5, 'dividir');
console.log( resultadoDividir );
let resultadoMultiplicar = Calculadora.calcular( 2, 5, 'multiplicar');
console.log( resultadoMultiplicar );

let calculadoraAvanzada = {...Calculadora};

console.log(calculadoraAvanzada.calcular(2,5,'suma'))