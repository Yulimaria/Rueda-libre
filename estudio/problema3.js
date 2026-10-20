/* . Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego
produzca la lista ordenada de la mezcla de los dos, por ejemplo,si los dos arreglostienen los números
1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17
17. Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén
ingresando los datos de forma ascendente  */
const prompt = require('prompt-sync')();

// Función para leer un vector ordenado ascendentemente
let vector1 = [];
let vector2 = [];

vector1.push(Number(prompt("Ingrese el primer número del vector 1: ")));

for (let i = 1; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i + 1} del vector 1: `));

    while (num < vector1[i - 1]) {// Validación para asegurar que los números se ingresen en orden ascendente
        num = Number(prompt(`Número inválido. Ingrese un número mayor o igual a ${vector1[i - 1]}: `));
     
    }  
       vector1.push(num); 
}

vector2.push(Number(prompt("Ingrese el primer número del vector 2: ")));
for(let i =1; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i + 1} del vector 2: `));
 
    while (num < vector2[i - 1]) {
        num = Number(prompt(`Número inválido. Ingrese un número mayor o igual a ${vector2[i - 1]}: `));
     
    }
      vector2.push(num);
}

let union= vector1.concat(vector2); // Se utiliza el método concat para unir los dos vectores en uno solo
union.sort((a, b) => a - b); // Se ordena el vector resultante de la unión utilizando el método sort con una función de comparación para ordenar numéricamente

console.log(`${vector1}`);
console.log(`${vector2}`);
console.log(`${union}`);