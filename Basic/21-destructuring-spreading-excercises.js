// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let frutas = ["manzana", "pera", "banana", "naranja", "uva"]

let [fruta1, fruta2] = frutas
console.log(fruta1)
console.log(fruta2)
console.log(frutas)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let colores = ["rojo", "azul"]

let [color1, color2, color3 = "amarillo"] = colores

console.log(color1, color2, color3)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2023,
    color: "blanco",
    precio: 25000
};

let { marca, modelo } = auto;
console.log(marca, modelo);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes

let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    profesion: "Ingeniero",
    ciudad: "Madrid"
};

let { nombre: nombrePersona, apellido: apellidoPersona } = persona;
console.log(nombrePersona, apellidoPersona);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let estudiante = {
    nombre: "Carlos",
    edad: 20,
    carrera: "Ingeniería",
    direccion: {
        calle: "Calle Principal",
        numero: 123,
        ciudad: "Barcelona",
        pais: "España"
    },
    contacto: {
        email: "carlos@email.com",
        telefono: "123-456-7890"
    }
};

let { direccion: { pais }, contacto: { email } } = estudiante
console.log(pais, email)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];
let numerosCombinados = [...numeros1, ...numeros2];
console.log(numerosCombinados)

// 7. Usa propagación para crear una copia de un array

let originalArray = [10, 20, 30, 40, 50];
let copiaArray = [...originalArray];

console.log("Array original:", originalArray);
console.log("Copia del array:", copiaArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let objeto1 = { a: 1, b: 2 };
let objeto2 = { c: 3, d: 4 };

let objetoCombinado = { ...objeto1, ...objeto2 };

console.log(objetoCombinado);

// 9. Usa propagación para crear una copia de un objeto

let objetoOriginal = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Valencia"
};

let copiaObjeto = { ...objetoOriginal };

console.log("Objeto original:", objetoOriginal);
console.log("Copia del objeto:", copiaObjeto);

// 10. Combina desestructuración y propagación

let usuario = {
    id: 101,
    nombre: "Laura",
    apellido: "Gómez",
    correo: "laura@example.com",
    direccion: {
        ciudad: "Sevilla",
        pais: "España"
    },
    hobbies: ["leer", "viajar", "fotografía"]
};

let { nombre, apellido, ...resto } = usuario;

console.log("Nombre extraído:", nombre);
console.log("Apellido extraído:", apellido);
console.log("Resto de propiedades:", resto);