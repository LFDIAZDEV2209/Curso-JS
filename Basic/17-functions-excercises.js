// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

console.log("1. Crea una función que reciba dos números y devuelva su suma")

const sum = (a, b) => a + b;

let a = 2
let b = 2
console.log(`la suma de ${a} + ${b} es: ${sum(a, b)}`)

console.log("----------------------------------------------------------------------------------------------------")

console.log("2. Crea una función que reciba un array de números y devuelva el mayor de ellos")

const funcNumber = (numbers) =>  {
    numMayor = 0 
    for (let value of numbers) {
        if (value >= numMayor) {
            numMayor = value
        }
    }
    return numMayor
}

let numbers = [6, 1, 2, 50, 3, 4, 5]
console.log(funcNumber(numbers))

console.log("----------------------------------------------------------------------------------------------------")

console.log("3. Crea una función que reciba un string y devuelva el número de vocales que contiene")

const vocales = (texto) => {
    let contadorVocales = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let letra of texto.toLowerCase()) {
        if (vocales.includes(letra)) {
            contadorVocales++;
        }
    }

    console.log(`El texto "${texto}" tiene ${contadorVocales} vocales`);
}

let word = "eskiurthebgn fkdughes5o8yh"
vocales(word)

console.log("----------------------------------------------------------------------------------------------------")

console.log("4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas")

const mayus = (words) => {
    let wordsInMayus = [];
    for (let value of words) {
        wordsInMayus.push(value.toUpperCase());
    }
    return wordsInMayus;
}

let wordsInMinus = ["jwayhegvfjkhesr", "jwayhegvfjkhesr", "jwayhegvfjkhesr", "jwayhegvfjkhesr"];
console.log(mayus(wordsInMinus));

console.log("----------------------------------------------------------------------------------------------------")

console.log("5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario")

const esPrimo = (numero) => {
    if (numero <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(7));    // true
console.log(esPrimo(10));   // false
console.log(esPrimo(13));   // true
console.log(esPrimo(1));    // false

console.log("----------------------------------------------------------------------------------------------------")

console.log("6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos")

const comun = (array1, array2) => {
    return array1.filter(elemento => array2.includes(elemento));
}

let animals1 = ["leon", "tigre", "elefante", "jirafa", "cebra"];
let animals2 = ["tigre", "cebra", "rinoceronte", "hipopotamo", "leon"];

console.log("Animales en común:", comun(animals1, animals2));

console.log("----------------------------------------------------------------------------------------------------")

console.log("7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares")

const sumPares = (array1) => {
    let result = 0;  
    for (let value of array1) {
        if (value % 2 === 0) {
            result += value;  
        }
    }
    return result;
}

let nums = [12, 435, 6, 5];
console.log("La suma de los números pares es:", sumPares(nums));

console.log("----------------------------------------------------------------------------------------------------")

console.log ("8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado")

const cuadrado = (arrayNumbers) => {
    let newArray = []
    for (values of arrayNumbers) {
        values **= 2
        newArray.push(values)
    }
    return newArray
}

let numbersAlCuadrado = [2, 4, 6, 8, 10]
console.log(cuadrado(numbersAlCuadrado))


console.log("----------------------------------------------------------------------------------------------------")

console.log("9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso")

const convertirInversa = (cadena) => {
    let cadenaInvertida = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }

    console.log(`Texto original: ${cadena}`);
    console.log(`Texto invertido: ${cadenaInvertida}`);
}

convertirInversa("hola mundo")

console.log("----------------------------------------------------------------------------------------------------")

console.log("10. Crea una función que calcule el factorial de un número dado")

const factorial = (numero) => {
    if (numero < 0) return "No existe factorial de números negativos";
    if (numero === 0 || numero === 1) return 1;
    
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log("Factorial de 5:", factorial(5));    
console.log("Factorial de 3:", factorial(3));    
console.log("Factorial de 0:", factorial(0));   
console.log("Factorial de -2:", factorial(-2));  