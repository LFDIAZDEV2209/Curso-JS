// Funciones 

// Simple

function myFunc(){
    console.log("Hola, funcion")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parametros 

function myFuncWithParams(name) {
    console.log(`Hola, ${name}`)
}

myFuncWithParams("Brais")
myFuncWithParams("Pipe")

// Funciones anonimas

const myFunc2 = function(name) {
    console.log(`Hola, ${name}`)
}

myFunc2("Pipe Diaz")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}`)

myFunc3("Kiuboooo")
myFunc4("queloqueeeee")

// Parametros 

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)

// Por defecto
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum(5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

console.log(mult(5,10))

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")


// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))