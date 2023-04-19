function suma(a,b){
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    else return 'No se pueden sumar';
}

function resta(a,b){
    if(a>= 0 && b<= a && b >= 0) return a-b;
    else return b-a;
}

function multiplicacion(a,b){
    if(typeof a === 'number' && typeof b === 'number') return a * b;
    else return "No son datos numericos";
}

function division(a,b){
    if(typeof a === 'number' && typeof b === 'number') return "No es numerico"
    else{
        if (b != 0) return a/b;
        else if (b == 0) return ("No puede ser divisible");
    }
  
}

function multiplicacxionSuma(a,b,c){
    return (a+b)*c
}

module.exports = {suma, resta, multiplicacion, division,multiplicacxionSumadfg: multiplicacxionSuma};


// Module -> Eso tiene un atributo para exportar es un objeto vacio