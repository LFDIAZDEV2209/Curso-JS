/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
const cadena1 = "Hola";
const cadena2 = "Mundo";
const concatenacion = cadena1 + " " + cadena2;
console.log(concatenacion); // "Hola Mundo"

// 2. Muestra la longitud de una cadena de texto
const texto = "JavaScript";
console.log(texto.length); // 10

// 3. Muestra el primer y último carácter de un string
const palabra = "Programación";
console.log("Primer carácter:", palabra[0]); // "P"
console.log("Último carácter:", palabra[palabra.length - 1]); // "n"

// 4. Convierte a mayúsculas y minúsculas un string
const textoMix = "EjEmPLo";
console.log(textoMix.toUpperCase()); // "EJEMPLO"
console.log(textoMix.toLowerCase()); // "ejemplo"

// 5. Crea una cadena de texto en varias líneas
const textoMultilinea = `Esta es una cadena
que ocupa múltiples
líneas de código`;
console.log(textoMultilinea);

// 6. Interpola el valor de una variable en un string
const nombre = "Carlos";
const edad = 30;
const mensaje = `Mi nombre es ${nombre} y tengo ${edad} años`;
console.log(mensaje); // "Mi nombre es Carlos y tengo 30 años"

// 7. Reemplaza todos los espacios en blanco de un string por guiones
const frase = "Los strings son fundamentales";
const fraseConGuiones = frase.split(" ").join("-");
console.log(fraseConGuiones); // "Los-strings-son-fundamentales"

// 8. Comprueba si una cadena de texto contiene una palabra concreta
const textoLargo = "JavaScript es un lenguaje de programación";
console.log(textoLargo.includes("lenguaje")); // true
console.log(textoLargo.includes("Python")); // false

// 9. Comprueba si dos strings son iguales
const str1 = "Hola";
const str2 = "hola";
console.log(str1 === str2); // false (diferente capitalización)
console.log(str1.toLowerCase() === str2.toLowerCase()); // true (comparación case insensitive)

// 10. Comprueba si dos strings tienen la misma longitud
const a = "OpenAI";
const b = "ChatGPT";
console.log(a.length === b.length); // false (6 vs 7)
console.log("Code".length === "Data".length); // true (ambas tienen 4)