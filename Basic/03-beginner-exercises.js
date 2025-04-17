/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Hola

// 2. Escribe un comentario en varias líneas

/*
hola
queloqueee
mmgv
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let name = 'Pipe'
let age = 20
let isValue = false
let isNotValue = true
let undefinedValue = undefined
let isNull = null 
let iduser = Symbol("1044607075")
let pcData = 32984569832465983245698n

// 4. Imprime por consola el valor de todas las variables

console.log({
    name: name,
    age: age,
    isValue: isValue,
    isNotValue: isNotValue,
    undefinedValue: undefinedValue,
    isNull: isNull,
    iduser: iduser,
    pcData: pcData
  });

// 5. Imprime por consola el tipo de todas las variables

console.log({
    name: typeof name,
    age: typeof age,
    isValue: typeof isValue,
    isNotValue: typeof isNotValue,
    undefinedValue: typeof undefinedValue,
    isNull: typeof isNull,
    iduser: typeof iduser,
    pcData: typeof pcData
  });

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

name = 'tumamma'
age = 260
isValue = true
isNotValue = false
undefinedValue = `
Kiubo pues mor esta va a ser mi comilla favorita
`
isNull = `
kiubo pues ya tengo valor
` 
iduser = Symbol("2938573924857")
pcData = 43587963847687345687346587346587364875n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

name = 348756
age = 'aksjdfhasekjrfhjeskwt'
isValue = null
isNotValue = undefined
undefinedValue = `
Kiubo pues mor esta va a ser mi comilla favorita
`
isNull = `
kiubo pues ya tengo valor
` 
iduser = 3284756348756238756872365873265872n
pcData = Symbol("dkesfjhgbdkrjgb")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const newName = 'jewhfwehf'
const newAge = 423
const newFalse = false
const newTrue = true
const newUndefinedValue = undefined
const isNewNull = null
const isNewIdUser = Symbol("4328756")
const isNewBigInt = 934659238745693285698235893n

// 9. A continuación, modifica los valores de las constantes

// je je no se puede modificar valores de constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// 3 veces jajajaja


// Finalizado