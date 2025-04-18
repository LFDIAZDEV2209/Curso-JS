// 1. Crea un array que almacene cinco animales

animals = ["Perro", "Gato", "Leon", "Tigre", "Mono",]

// 2. Añade dos más. Uno al principio y otro al final

animals.push("Foca")
animals.unshift("Abeja")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros

mySet = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])

// 5. Añade dos más. Uno de ellos repetido

mySet.add("libro6")
mySet.add("libro6")

console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("libro1")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

months = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Julio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"],
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (months.has("5")){
    console.log(months.get("5"))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("verano", ["Junio", "Julio", "Agosto"])
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

myArray = ['holaaaaaaaaaaaa', 345]

mySetArray = new Set(myArray)
console.log(mySetArray)

myMap = new Map()
myMap.set("array", mySetArray)

console.log(myMap)
