// Operadores

// Operadores aritmeticos 

let a = 5
let b = 10

console.log(`Suma: ${5 + 10}`) // Suma
console.log(`Resta: ${5 - 10}`) // Resta
console.log(`Multiplicar: ${5 * 10}`) // Multiplicar
console.log(`Division: ${5 / 10}`) // Division

console.log(`Potencia: ${5 ** 10}`) // Potencia
console.log(`Modulo: ${5 % 10}`) // Modulo

a++
console.log(`Incremento: ${a}`) // Incremento

b--
console.log(`Decremento: ${b}`) // Decremento

// Operadores de asignacion

let myVariable = 2
console.log(`Variable: ${myVariable}`)
myVariable += 2
console.log(`Incremento por la misma: ${myVariable}`)

myVariable -= 2  // Operada  por ella misma
myVariable *= 2 // Operada por ella misma
myVariable /= 2 // Operada por ella misma
myVariable %= 2 // Operada por ella misma
myVariable **= 2 // Operada  por ella misma

// Operadores de comparacion

console.log(`Mayor que: ${a > b}`)
console.log(`Menor que: ${a < b}`)
console.log(`Mayor o igual: ${a >= b}`)
console.log(`Menor o igual: ${a <= b}`)
console.log(`Igualdad por valor: ${a == b}`)
console.log(`Igualdad por valor y tipo: ${a === "6"}`)
console.log(`Diferente: ${a != 6}`)
console.log(`Diferente por valor y tipo: ${a !== "6"}`)
console.log(`Diferente por valor y tipo: ${a !== "6"}`)
console.log(`Valor 0: ${0 == false}`)
console.log(`Numeros mayor a 0: ${1 == false}`)

// Truthy values (Valores verdaderos)

// Todos los numeros positivos y negativos menos el 0
// Todas las cadenas de texto menos las vacias
// El boolean True

// Falsy Values (Valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// Boolean false 
// Cadenas de texto vacias

// Operadores logicos

// and (&&)
console.log(`Y(Todos verdaderos = true, Todo falso = false, a partir de una sola diferencia = false): ${5 > 10 && 15 > 20}`)

// or (||)
console.log(`O(Con que una se cumple = true, Sino se cumple ninguna = false): ${5 > 10 || 15 > 20}`)

// not (!)
console.log(`No(Negar algun valor): ${!5 > 10 || !15 > 20}`)

// Operadores terniarios 

const isRaining = false

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")
