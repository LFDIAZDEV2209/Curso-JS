// 1. Crea una clase que reciba dos propiedades

class People {

    constructor (name, age) {
        this.name = name,
        this.age = age 
    }

    static compareAges(person1, person2) {
        return person1.age >= 18 && person2.age >= 18 
            ? "Ambos son adultos" 
            : "Al menos uno es menor de edad";
    }

}

// 2. Añade un método a la clase que utilice las propiedades

class Animal {

    constructor (name, color) {
        this.name = name,
        this.color = color
    }

    sound () {
        console.log("Sonido generico")
    }

}

// 3. Muestra los valores de las propiedades e invoca a la función

let animal1 = new Animal("Perro", "Negro")
let person1 = new People("Giuliana", 18)

console.log("Propiedades de la persona 1:", person1.name, person1.age);
console.log("Propiedades del perro:", animal1.name, animal1.color);

animal1.sound(); 

// 4. Añade un método estático a la primera clase

// Creado 

// 5. Haz uso del método estático

let person2 = new People("Pipe", 20)
let person3 = new People("Juan", 60)

console.log("La persona adulta es:", People.compareAges(person1, person2))

// 6. Crea una clase que haga uso de herencia

class Dog extends Animal {

    constructor (name, size) {
        super(name),
        this.size = size
    }

    run () {
        console.log("El perro corre")
    }

}


// 7. Crea una clase que haga uso de getters y setters

class Person {
    #name;  
    #age;   
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        if (typeof newName === 'string' && newName.trim() !== '') {
            this.#name = newName.trim();
        } else {
            console.error("El nombre debe ser un texto válido.");
        }
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0 && newAge <= 120) {
            this.#age = newAge;
        } else {
            console.error("La edad debe ser un número entre 0 y 120.");
        }
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// Listo 

// 9. Utiliza los get y set y muestra sus valores

let person4 = new Person("Giuliana", 20)

console.log(person4.name)
console.log(person4.age)

person4.name = ""
person4.age = 121


// 10. Sobrescribe un método de una clase que utilice herencia 

// Listo en el ejercicio 6