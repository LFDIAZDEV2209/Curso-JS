// 1. Captura una excepción utilizando try-catch
try {
    let objetoIndefinido;
    console.log(objetoIndefinido.propiedad); // Lanza TypeError
} catch (error) {
    console.log("Error capturado:", error.message); // "Cannot read properties of undefined"
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    let array = [1, 2, 3];
    console.log(array[10]); // Lanza undefined (no error), pero si usáramos array.push() podría fallar
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Este bloque siempre se ejecuta, haya o no error.");
}

// 3. Lanza una excepción genérica
function dividir(a, b) {
    if (b === 0) {
        throw new Error("División por cero no permitida.");
    }
    return a / b;
}

try {
    console.log(dividir(10, 0));
} catch (error) {
    console.log("Error:", error.message); // "División por cero no permitida."
}

// 4. Crea una excepción personalizada
class MiErrorPersonalizado extends Error {
    constructor(mensaje, codigo) {
        super(mensaje);
        this.codigo = codigo;
    }
}

// 5. Lanza una excepción personalizada
try {
    throw new MiErrorPersonalizado("Algo salió mal", 500);
} catch (error) {
    console.log(`Código ${error.codigo}: ${error.message}`); // "Código 500: Algo salió mal"
}

// 6. Lanza varias excepciones según una lógica definida
function validarEdad(edad) {
    if (typeof edad !== "number") {
        throw new TypeError("La edad debe ser un número.");
    }
    if (edad < 0) {
        throw new RangeError("La edad no puede ser negativa.");
    }
    return edad;
}

try {
    validarEdad("25"); // Lanza TypeError
} catch (error) {
    console.log("Error:", error.message);
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    validarEdad(-5); // Lanza RangeError
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de tipo:", error.message);
    } else if (error instanceof RangeError) {
        console.log("Error de rango:", error.message); // "La edad no puede ser negativa."
    }
}

// 8. Bucle que intenta transformar a float y captura errores
let valores = ["3.14", "texto", "99", null];
for (let valor of valores) {
    try {
        let numero = parseFloat(valor);
        if (isNaN(numero)) {
            throw new Error(`'${valor}' no es un número válido.`);
        }
        console.log("Número convertido:", numero);
    } catch (error) {
        console.log("Error:", error.message); // Ejemplo: "'texto' no es un número válido."
    }
}

// 9. Función que verifica una propiedad y lanza excepción personalizada
class PropiedadFaltanteError extends Error {
    constructor(propiedad) {
        super(`La propiedad '${propiedad}' no existe en el objeto.`);
        this.propiedad = propiedad;
    }
}

function verificarPropiedad(objeto, propiedad) {
    if (!objeto.hasOwnProperty(propiedad)) {
        throw new PropiedadFaltanteError(propiedad);
    }
    return objeto[propiedad];
}

try {
    let usuario = { nombre: "Ana" };
    console.log(verificarPropiedad(usuario, "edad")); // Lanza PropiedadFaltanteError
} catch (error) {
    console.log("Error:", error.message); // "La propiedad 'edad' no existe en el objeto."
}

// 10. Función con reintentos en caso de error (hasta 10 veces)
function operacionRiesgosa(intentos = 0) {
    if (intentos >= 10) {
        throw new Error("Límite de reintentos alcanzado.");
    }
    try {
        // Simular un fallo aleatorio (50% de probabilidad)
        if (Math.random() < 0.5) {
            throw new Error("Error aleatorio.");
        }
        console.log("¡Éxito en el intento", intentos + 1, "!");
    } catch (error) {
        console.log("Intento", intentos + 1, "fallido. Reintentando...");
        operacionRiesgosa(intentos + 1);
    }
}

operacionRiesgosa(); // Ejecuta hasta 10 reintentos.