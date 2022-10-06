function llenarVector(vector, tam){
    for (let i = 0; i < tam; i++) {
        vector[i]=Math.round(Math.random()*100);    
    }
    return vector;
}

function sumar(vector) {
    var suma = 0;
    for (let i = 0; i < vector.length; i++) {
        var numeroActual = vector[i];
        suma = suma + numeroActual;
    }
    promedio = suma/vector.length;
    console.log(`El promedio del vector es: ${promedio}`)
    return suma;
}

function desviacion(vector) {
    var sumatoria = 0;
    for (let i = 0; i < vector.length; i++) {
        numerador = vector[i] - promedio;
        potencia = Math.pow(numerador, 2);
        sumatoria = potencia + sumatoria;
    }
    desv = Math.sqrt(sumatoria / vector.length);
    return desv;
}

function moda(vector) {
    var mod = 0;
    for (let i = 0; i < vector.length; i++) {
        for (let j = 0; j < vector.length; j++) {
            if (vector[i] == vector[j]) {
                mod == vector[i];
            }
        }
    }
    return mod;
}
var v=[];
var t=15;
llenarVector(v,t);
console.log(v);
console.log(`La suma de los elementos dentro del vector es: ${sumar(v)}`);
console.log(`La desviacion estandar de los elementos dentro del vector es: ${desviacion(v)}`);
console.log(`La moda de los elementos del vector es: ${moda(v)}`)