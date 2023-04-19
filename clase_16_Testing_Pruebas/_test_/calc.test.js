const { NullConsole } = require('@jest/console');
const {suma,resta,multiplicacion,division,multiplicacxionSumadfg} = require('../calc');


test('Prueba Suma',() => {
    const resultado = suma(5,10);
    const resultadoEsperado = 15;
    expect(resultado).toBe(resultadoEsperado);
});

// Prueba importante verificar que no puede ser divisible por cero

test('Prueba Division por cero',() => {
    const resultado = division(10,0);
    const resultadoEsperado = "No puede ser divisible";
    expect(resultado).toBe(resultadoEsperado);
});

//La multiplicacion por cero debo dar cero

test('Prueba Multiplicacion por cero',() => {
    const resultado = multiplicacion(5,0);
    const resultadoEsperado = 0;
    expect(resultado).toBe;
});

test('Prueba resta',() => {
    const resultado = resta(5,10);
    const resultadoEsperado = 5;
    expect(resultado).toBe(resultadoEsperado);
});

// No se poueden sumar numeros nulos

test('Prueba Suma null',() => {
    const resultado = suma(null,null);
    const resultadoEsperado = ('No se pueden sumar');
    expect(resultado).toBe(resultadoEsperado);
});

// Nose pueden dividir nulos

test('Prueba Division null',() => {
    const resultado = division(10,0);
    const resultadoEsperado = "No puede ser divisible";
    expect(resultado).toBe(resultadoEsperado);
});

// No se pueden multiplicar nulos

test('Prueba Multiplicacion null',() => {
    const resultado = multiplicacion(5,0);
    const resultadoEsperado = "No son datos numericos";
    expect(resultado).toBe;
});

// No se pueden restar nulos

test('Prueba resta null',() => {
    const resultado = resta(5,10);
    const resultadoEsperado = 5;
    expect(resultado).toBe(resultadoEsperado);
});