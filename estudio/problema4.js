/*Una emisora con presencia en diferentes ciudades, desea conocer el rating de canciones y cantantes
más escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a aprendices del
SENA desarrollar una solución que permita conocer la respuesta de 6 personas con relación a sus
gustos musicales. Con fines administrativos y realizar una rifa entre las personas encuestadas, la
emisora desea poder registrar de las personas entrevistadas su nombre, número de identificación
(cédula), fecha de nacimiento, correo electrónico, ciudad de residencia, ciudad de origen. Además,
se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en cada una de las
personas que se ingrese. Teniendo en cuenta lo anterior, se sugiere que la solución deberá mostrar
un menú que permita las siguientes opciones:
a. Agregar una persona con los datos que se listan anteriormente.
b. Mostrar la información personal de una persona particular por medio de su posición en el
vector.*/
const prompt = require('prompt-sync')();

let personas = [];

let opcion;

do {

    opcion = Number(prompt(`

1. Agregar persona
2. Mostrar persona
3. Salir

Seleccione una opción:
`));

    switch (opcion) {

        case 1:

            let nombre = prompt("Ingrese nombre: ");
            let cedula = prompt("Ingrese cédula: ");
            let fechaNacimiento = prompt("Ingrese fecha de nacimiento: ");
            let correo = prompt("Ingrese correo electrónico: ");
            let ciudadResidencia = prompt("Ingrese ciudad de residencia: ");
            let ciudadOrigen = prompt("Ingrese ciudad de origen: ");
            let artistaFavorito = prompt("Ingrese artista favorito: ");
            let cancionesFavoritas = [];
            for (let i = 0; i < 3; i++) {

                let cancion = prompt(`Ingrese canción favorita ${i + 1}: `);
                cancionesFavoritas.push(cancion);
            }

            let persona = {

                nombre: nombre,
                cedula: cedula,
                fechaNacimiento: fechaNacimiento,
                correo: correo,
                ciudadResidencia: ciudadResidencia,
                ciudadOrigen: ciudadOrigen,
                cancionesFavoritas: cancionesFavoritas ,
                artistaFavorito: artistaFavorito 
        
            };

            personas.push(persona);
           

            console.log("Persona agregada correctamente");

            break;


        case 2:

            let posicion = Number(prompt("Ingrese posición: "));

            console.log(personas[posicion]);

            break;


        case 3:

            console.log("Programa finalizado");

            break;


        default:

            console.log("Opción inválida");
    }

} while (opcion !== 3);
