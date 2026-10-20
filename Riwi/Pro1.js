/*Ejercicio 1: Reporte de coders por clan
Riwi necesita un reporte con el rendimiento de sus coders.
• Calcula el promedio de notas de cada coder y agrégalo como una nueva
propiedad.
• Marca a cada coder como "Aprobado" (promedio de 3.5 o más) o "En riesgo".
• Encuentra el mejor coder de cada clan.
• Muestra cuántos coders hay en riesgo por clan.
*/

let coders = [
 { nombre: "Ana", clan: "Lovelace", notas: [4.5, 3.8, 4.2] },
 { nombre: "Luis", clan: "Turing", notas: [2.9, 3.1, 3.0] },
 { nombre: "Sofía", clan: "Lovelace", notas: [3.2, 3.0, 2.8] },
 { nombre: "Mateo", clan: "Turing", notas: [4.9, 4.7, 4.8] }
];
 // calcular promedio de notas y agregar propiedad

 const estudiantesConPromedio = coders.map (coder => {
    const suma = coder.notas.reduce((ac, nota) => ac +  nota, 0); // reduce junta todas las notas en un solo numero
    const promedio = Number((suma / coder.notas.length).toFixed(2));
    console.log (promedio)


    if ( promedio >= 3.5){
        console.log(`El coder ${coder.nombre} aprobado`);
    } else 
       console.log(`El coder ${coder.nombre} esta en riesgo`);
       //  El return obligatorio para que se guarde en estudiantesConPromedio
    return {
        ...coder,
        promedio: promedio,
        estado: promedio >= 3.5 ? "Aprobado" : "En riesgo"// agregando al obejeto coder la propiedad estado, si el promedio es mayor o igual a 3.5 entonces es aprobado, sino en riesgo
    };
})
for(let i = 0; i < estudiantesConPromedio.length; i++ ){
    const coderMejor = estudiantesConPromedio [i] //creando un array para almacenar lo que recorri del for
    const codersDelClan = coderMejor.clan //para que me muestre el clan del coder
}

