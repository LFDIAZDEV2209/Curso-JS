// Console

// 1. Crea una función que utilice error correctamente
function mostrarError(mensaje) {
    console.error("❌ Error:", mensaje, new Error("Detalle del error"));
}
mostrarError("Falló la conexión"); // Uso: mostrarError("Mensaje personalizado");

// 2. Crea una función que utilice warn correctamente
function advertir(problema) {
    console.warn("⚠️ Advertencia:", problema);
}
advertir("La sesión expirará pronto"); // Uso: advertir("Descripción del problema");

// 3. Crea una función que utilice info correctamente
function informar(datos) {
    console.info("ℹ️ Información:", datos);
}
informar("Usuario registrado a las 14:30"); // Uso: informar("Datos relevantes");

// 4. Utiliza table
const usuarios = [
    { nombre: "Brais", edad: 37, pais: "España" },
    { nombre: "Sara", edad: 21, pais: "México" }
];
console.table(usuarios); // Muestra datos en formato tabla

// 5. Utiliza group
function mostrarPerfil(usuario) {
    console.group("Perfil de usuario");
    console.log("Nombre:", usuario.nombre);
    console.log("Edad:", usuario.edad);
    console.groupEnd();
}
mostrarPerfil({ nombre: "Ana", edad: 25 }); // Agrupa información relacionada

// 6. Utiliza time
function medirTiempo() {
    console.time("Tiempo de cálculo");
    let suma = 0;
    for (let i = 0; i < 1e6; i++) suma += i;
    console.timeEnd("Tiempo de cálculo"); // Mide tiempo entre time() y timeEnd()
}
medirTiempo();

// 7. Valida con assert si un número es positivo
function validarPositivo(num) {
    console.assert(num > 0, `El número ${num} no es positivo`); // Solo muestra error si la condición es falsa
}
validarPositivo(-5); // Muestra error en consola
validarPositivo(10); // No muestra nada

// 8. Utiliza count
function contarEventos(evento) {
    console.count(`Evento '${evento}'`); // Cuenta las veces que se llama
}
contarEventos("click"); // Evento 'click': 1
contarEventos("click"); // Evento 'click': 2
console.countReset("click"); // Reinicia contador
contarEventos("click"); // Evento 'click': 1

// 9. Utiliza trace
function funcionA() {
    funcionB();
}
function funcionB() {
    console.trace("Rastreo de llamadas"); // Muestra la pila de ejecución
}
funcionA(); // Muestra ruta de llamadas (A → B → trace)

// 10. Utiliza clear
function limpiarConsola() {
    // console.clear(); // Descomenta para limpiar la consola (comentado para evitar borrar en ejemplos)
}
limpiarConsola();