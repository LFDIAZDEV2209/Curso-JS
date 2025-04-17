/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
const nombre = "María";
if (nombre === "María") {
  console.log("Tu nombre es María");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coinciden con unos establecidos
const usuarioCorrecto = "admin";
const passCorrecto = "1234";
const usuario = "admin";
const pass = "1234";

if (usuario === usuarioCorrecto && pass === passCorrecto) {
  console.log("Acceso concedido");
} else {
  console.log("Credenciales incorrectas");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const numero = -5;
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const edadVotar = 16;
if (edadVotar >= 18) {
  console.log("Puede votar");
} else {
  const añosFaltantes = 18 - edadVotar;
  console.log(`No puede votar. Le faltan ${añosFaltantes} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
const edad = 25;
const categoria = edad >= 18 ? "adulto" : "menor";
console.log(categoria); // "adulto"

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"
const mes = "junio";
if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
  console.log("Es invierno");
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
  console.log("Es primavera");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
  console.log("Es verano");
} else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
  console.log("Es otoño");
} else {
  console.log("Mes no válido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes === "febrero") {
  console.log("Tiene 28 o 29 días");
} else if (
  mes === "abril" ||
  mes === "junio" ||
  mes === "septiembre" ||
  mes === "noviembre"
) {
  console.log("Tiene 30 días");
} else {
  console.log("Tiene 31 días");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
const idioma = "francés";
switch (idioma) {
  case "español":
    console.log("¡Hola!");
    break;
  case "inglés":
    console.log("Hello!");
    break;
  case "francés":
    console.log("Bonjour!");
    break;
  default:
    console.log("Idioma no reconocido");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Es invierno");
    break;
  case "marzo":
  case "abril":
  case "mayo":
    console.log("Es primavera");
    break;
  case "junio":
  case "julio":
  case "agosto":
    console.log("Es verano");
    break;
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("Es otoño");
    break;
  default:
    console.log("Mes no válido");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
  case "febrero":
    console.log("Tiene 28 o 29 días");
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("Tiene 30 días");
    break;
  default:
    console.log("Tiene 31 días");
}