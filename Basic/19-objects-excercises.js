// 1. Crea un objeto con 3 propiedades

let person = {
    id: 1044607075,
    job: "Desarrollador junior",
    work: function () {
        console.log(`Este ${this.job} trabaja`)
    }
}

console.log(person)

// 2. Accede y muestra su valor

console.log(person.id)
console.log(person.job)
person.work()

// 3. Agrega una nueva propiedad

person.email = "diazf7583@gmail.com"
console.log(person)

// 4. Elimina una de las 3 primeras propiedades

delete person.id
console.log(person)

// 5. Agrega una función e invócala

person.work()

// 6. Itera las propiedades del objeto

for (let key in person) {
    console.log(key)
}

// 7. Crea un objeto anidado

let person2 = {
    name: "Pipe",
    player: {
        posicion: "Alero",
        equipo: "Golden State Warriors"
    } 
}

// 8. Accede y muestra el valor de las propiedades anidadas

for (let key in person2.player) {
    console.log(key)
}

// 9. Comprueba si los dos objetos creados son iguales

console.log("¿Son iguales person y person2?", person === person2); // false
console.log("¿Son iguales person y person?", person === person);   // true

// 10. Comprueba si dos propiedades diferentes son iguales

console.log("¿Son iguales los trabajos?", person.job === person2.player.posicion); // false
console.log("¿Son iguales los nombres?", person.name === person2.name);           // true (si ambos tienen el mismo nombre)