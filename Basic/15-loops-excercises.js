// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++ ) {
    console.log(i)
}

i = 1
while (i <= 20) {
    console.log(i)
    i++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log("La suma de los números del 1 al 100 es:", suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0){
        console.log(`Numeros pares ${i}`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

names = ["luis", "pipe", "ricardo", "pacha", "giuliana"]

for (values of names) {
    console.log(values)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "perezcerjfnamoweku";
let contadorVocales = 0;
const vocales = ['a', 'e', 'i', 'o', 'u'];

for (let letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
        contadorVocales++;
    }
}

console.log(`El texto "${texto}" tiene ${contadorVocales} vocales`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let multiplicar = 1
let numbers = [1, 2, 3, 4, 5]
for (values of numbers) {
    multiplicar *= values
}
console.log(multiplicar)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

const number = 5
for (let i = 0; i < 10; i++) {
    resultado = i*number
    console.log(`${number} * ${i} = ${resultado}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadena = "Hola Mundo";
let cadenaInvertida = "";

for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
}

console.log(`Texto original: ${cadena}`);
console.log(`Texto invertido: ${cadenaInvertida}`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fib = [0, 1]; // Iniciamos con los dos primeros números de Fibonacci

for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log("Los primeros 10 números de Fibonacci son:");
console.log(fib.join(", "));

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros = [5, 12, 8, 15, 3, 20, 9, 11, 7, 18];
let mayoresADiez = [];

for (let numero of numeros) {
    if (numero > 10) {
        mayoresADiez.push(numero);
    }
}

console.log("Array original:", numeros);
console.log("Números mayores a 10:", mayoresADiez);