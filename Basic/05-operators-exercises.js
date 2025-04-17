/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
const suma = 10 + 5; // 15
const resta = 20 - 8; // 12
const multiplicacion = 6 * 4; // 24
const division = 50 / 2; // 25
const modulo = 15 % 4; // 3 (resto de la división)
const exponente = 2 ** 3; // 8 (2 elevado a 3)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga use de las variables utilizadas para las operaciones aritméticas
let asignacionSuma = suma;
asignacionSuma += 5; // 20 (15 + 5)
let asignacionResta = resta;
asignacionResta -= 3; // 9 (12 - 3)
let asignacionMultiplicacion = multiplicacion;
asignacionMultiplicacion *= 2; // 48 (24 * 2)
let asignacionDivision = division;
asignacionDivision /= 5; // 5 (25 / 5)
let asignacionModulo = modulo;
asignacionModulo %= 2; // 1 (3 % 2)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5); // true (mayor que)
console.log(20 <= 20); // true (menor o igual que)
console.log(5 === 5); // true (igualdad estricta)
console.log(8 !== 10); // true (desigualdad estricta)
console.log("Hola" == "Hola"); // true (igualdad)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(3 > 10); // false
console.log(15 <= 10); // false
console.log(5 === "5"); // false (diferente tipo)
console.log(8 !== 8); // false
console.log("Hola" == "hola"); // false (diferente mayúscula)

// 5. Utiliza el operador lógico AND (&&)
console.log(true && true); // true
console.log(10 > 5 && 20 < 30); // true
console.log(suma === 15 && resta === 12); // true

// 6. Utiliza el operador lógico OR (||)
console.log(false || true); // true
console.log(10 > 20 || 5 < 10); // true
console.log(suma === 10 || resta === 12); // true (aunque suma no es 10, resta sí es 12)

// 7. Combina ambos operadores lógicos (AND y OR)
console.log((10 > 5 && 5 < 10) || 20 === 10); // true (porque la primera parte es true)
console.log((suma === 10 || resta === 15) && multiplicacion === 24); // false (porque el OR es false)

// 8. Añade alguna negación (!)
console.log(!false); // true
console.log(!(10 > 20)); // true (niega false)
console.log(!(suma === 15 && resta === 12)); // false (niega true)

// 9. Utiliza el operador ternario
const edad = 18;
const esMayor = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayor); // "Es mayor de edad"

const numero = 7;
const esPar = numero % 2 === 0 ? "Es par" : "Es impar";
console.log(esPar); // "Es impar"

// 10. Combina operadores aritméticos, de comparación y lógicas
const resultado1 = (10 + 5) > (20 - 8) && 6 * 4 === 24;
console.log(resultado1); // true (15 > 12 && 24 === 24)

const resultado2 = (50 / 2 === 25 || 15 % 4 !== 3) && !(2 ** 3 < 5);
console.log(resultado2); // true (true || false) && !(false) → true && true → true

const resultado3 = ((5 + 3) * 2 === 16 && 10 < 20) || (30 / 5 !== 6 && 8 > 10);
console.log(resultado3); // true (true && true) || (false && false) → true || false → true