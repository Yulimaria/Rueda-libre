/* Ejercicio 1: Clasificador de temperatura
Una app del clima necesita mostrar un mensaje según la temperatura del día.
• Pide al usuario la temperatura en grados Celsius.
• Si es menor a 10, muestra "Hace frío, lleva chaqueta".
• Si está entre 10 y 24, muestra "Clima templado".
• Si es 25 o más, muestra "Hace calor, hidrátate".
• Si el valor ingresado no es un número, muestra un mensaje de erro */
/*
let Celsius = 25;
if(Celsius < 10){
    console.log("esta haciendo frio lleva chaqueta")
    
}    else if( Celsius >= 10 && Celsius<=24) {
     console.log("clima templado")
     }      
         else if (Celsius >= 25){
         console.log("hace calor, hidratate")
         }

             else {
             console.log("el dato ingresado no corresponde a numero")
             }

/* El parqueadero de la sede cobra según las horas que el vehículo permanece estacionado.
• Pide el número de horas y si el usuario es coder de Riwi (sí / no).
• La primera hora cuesta $3.000 y cada hora adicional $2.000.
• Si el total supera $20.000, se cobra la tarifa plena de $20.000.
• Si es coder, aplica un descuento del 15% sobre el valor final.
• Muestra el total a pagar. */

/*

let hour  = 1;
let coder = true;
let additionalHour = 22
let total = hour+additionalHour
console.log(`la cantidad de horas registradas son: ${total}`)

if (total<=1 && coder ==true ){
 let pago = 3000-(3000 * 0.15) 
    console.log (pago)
}    
    if (total<=1 && coder ==false ){ 
    console.log ("El saldo a pagar es 3000")
} 
    if(total > 1 && total <= 9 && coder ==true){
    let pago = (2000*additionalHour+ 3000)
    let saldo = pago - (pago*0.15)
    console.log(`la cantidad de horas a pagar son: ${saldo}`)

}  if(total > 1 && total <= 9 && coder ==false){
    let pago = (2000*additionalHour+ 3000)
    console.log(`la cantidad de horas a pagar son: ${pago}`)

} if (total >= 10 && coder ==true){
     console.log("la tarifa a pagar es 17.000")

}  else if (total >= 10 && coder ==false){
    console.log("la tarifa a pagar es 20.000")
}


*/

/* Ejercicio 3: Cuenta regresiva de lanzamiento
El equipo va a hacer el lanzamiento de su proyecto y quiere una cuenta regresiva en
consola.
• Pide al usuario un número N.
• Si N es menor o igual a 0, muestra "Número no válido".
• Si es válido, muestra los números desde N hasta 1, uno por línea.
• Al terminar, muestra "¡Despegue!". */


let N = 9
if(N >= 1){
   while (N >=1) {
    N--;
     console.log(`Inicia el conteo regresivo: ${N} `)
} 
}else{
    console.log("ingresa un numero valido")}

console.log("¡Despegue!")