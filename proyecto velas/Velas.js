/* Quiero que veas la diferencia conceptual
Acción                       Código
Crear una vela               new VelaLiora(...)
Crear un inventario          new Inventario(...)
Usar un inventario existente inventario.algo()
Imprimir un resultado        console.log(...)
Cada vez que veas un punto (.), piensa inmediatamente:
"Estoy entrando a un objeto."

Pero cuando NO hay punto:
Simplemente estoy usando una variable (en este caso, un parámetro).
Expresión	¿Qué significa?
vela	           El objeto completo.
vela.nombre	       El atributo nombre del objeto vela.
vela.stock	       El atributo stock del objeto vela.
this.velas 	       El atributo velas del objeto actual (this).
inventario.velas   El atributo velas del objeto inventario.

*/


class VelaLiora{ // aca estoy construyendo la clase VelaLiora, que es la clase principal de este proyecto, y dentro de esta clase se encuentran los atributos y metodos que se van a utilizar para crear las velas
    constructor(nombre, aroma, color, precio, stock){ 
         this.nombre = nombre; // esto es un atributo que se encarga de almacenar el nombre de la vela, y se encuentra dentro del constructor de la clase VelaLiora
         this.aroma = aroma;
         this.color = color;
         this.precio = precio;
         this.stock = stock;
    }
    mostrarInformacion(){ // aca estoy creando un metodo que se encarga de mostrar la informacion de la vela, y dentro de este metodo se encuentra un return que retorna la informacion de la vela
        return `La vela ${this.nombre} tiene un aroma a ${this.aroma}, es de color ${this.color}, tiene un precio de ${this.precio} y un stock de ${this.stock}`;
    }
    
    venta(cantidad){// se pone cantidad para que el usuario pueda ingresar la cantidad de velas que desea comprar y se le indique si hay stock suficiente o no  
        if (this.stock >= cantidad){
            this.stock -= cantidad;

        let total = this.precio * cantidad;

        return `Compra realizada. Total: $${total}`;
            return `La vela ${this.nombre} esta disponible, quedan ${this.stock} unidades`;
          
        } else if (this.stock === 0){
            return `La vela ${this.nombre} no esta disponible`;
        }
          else if (this.stock < cantidad){
             return `La vela ${this.nombre} solo tiene ${this.stock} unidades disponibles. Te faltan ${cantidad - this.stock} unidades para completar tu pedido.`;
    
    }
  
}
}
    class Inventario{ // aca estoy construyendo la clase Inventario, que es la clase que se encarga de manejar el inventario de las velas, y dentro de esta clase se encuentran los atributos y metodos que se van a utilizar para manejar el inventario
         constructor(nombre){
              this.nombre = nombre;
             this.velas = []; // aca estoy creando un arreglo vacio que se va a utilizar para almacenar las velas que se van a crear, y este arreglo se encuentra dentro de la clase Inventario
        }
         
    agregarVela(vela){ // aca estoy creando un metodo que se encarga de agregar una vela al inventario, y dentro de este metodo se encuentra un return que retorna la informacion de la vela que se agrego al inventario    
         this.velas.push(vela);
    }
    
    venderVela(nombre, cantidad){
         for(let vela of this.velas){
              if(vela.nombre === nombre){ // es
            return vela.venta(cantidad);
        }
    }
    return `La vela ${nombre} no existe en el inventario ${this.nombre}`;
}

    mostrarVelas(){ // aca estoy creando un metodo que se encarga de mostrar todas las velas que se encuentran en el inventario, y dentro de este metodo se encuentra un for...of que recorre el arreglo de velas y muestra la informacion de cada vela

        for(let vela of this.velas){
            console.log(vela.mostrarInformacion());;
        }

    }
      
    buscarVela(nombre){
        for(let vela of this.velas){
            if(vela.nombre === nombre){
                return vela.mostrarInformacion();
            }
        }
        return `La vela ${nombre} no existe en el inventario ${this.nombre}`;
    }
    agregarStock(nombre, cantidad){ // "Este método recibe dos parámetros: el nombre de la vela que quiero buscar y la cantidad de unidades que quiero agregar."
        for(let vela of this.velas){ // Aquí accedo al atributo velas del objeto Inventario, que es un arreglo. El for...of recorre ese arreglo y, en cada vuelta, la variable vela almacena uno de los objetos VelaLiora
            if(vela.nombre === nombre){ //"Compara el atributo nombre del objeto vela con el parámetro nombre recibido por el método."
                vela.stock += cantidad; //"Sumar la cantidad."Accedo al atributo stock del objeto vela y le sumo la cantidad recibida.""
                return `Se agregaron ${cantidad} unidades a la vela ${nombre}. Ahora hay ${vela.stock} unidades disponibles.`;
            }
        }
        return `La vela ${nombre} no existe en el inventario ${this.nombre}`;
    }
      
    velasStockBajo(limite){ // aca estoy creando un metodo que se encarga de mostrar las velas que tienen un stock bajo, y dentro de este metodo se encuentra un for...of que recorre el arreglo de velas y muestra la informacion de cada vela que tiene un stock menor a 3
     for(let vela of this.velas) // creando un for...of que recorre el arreglo de velas y muestra la informacion de cada vela que tiene un stock menor a 3
      if (vela.stock < limite) { // aca estoy creando una condicion que se encarga de mostrar las velas que tienen un stock menor a 3, y dentro de esta condicion se encuentra un return que retorna la informacion de la vela que tiene un stock menor a 3
        console.log(`La vela ${vela.nombre} tiene un stock bajo de ${vela.stock} unidades.`);
    } 
}
    eliminarVela(nombre){

        for(let i = 0; i < this.velas.length; i++){

        if(this.velas[i].nombre === nombre){

            this.velas.splice(i, 1);
            return `La vela ${nombre} fue eliminada del inventario ${this.nombre}`;
        }
    }
          return `La vela ${nombre} no existe en el inventario ${this.nombre}`;
    }
    
    valorTotalInventario(){ // aca estoy creando un metodo que se encarga de mostrar el valor total del inventario, y dentro de este metodo se encuentra un for...of que recorre el arreglo de velas y suma el valor de cada vela multiplicado por su stock
        let total = 0; // variable encargada de almacenar el valor total del inventario, y se inicializa en 0
        for(let vela of this.velas){
            total += vela.precio * vela.stock; // le estot diciendo al total que le sume el precio de la vela multiplicado por su stock, y esto se hace para cada vela que se encuentra en el arreglo de velas
        }
        return total; // retorna el valor total del inventario, que es la suma de todos los precios de las velas multiplicados por su stock
    }
    }


const vela1 = new VelaLiora("Noche de calma", "lavanda", "morado", 20000, 3);
const vela2 = new VelaLiora("Amanecer", "rosas", "rosa", 15000, 5);
const vela3 = new VelaLiora("Atardecer", "vainilla", "naranja", 25000, 2);
const vela4 = new VelaLiora("Oasis", "jazmin", "blanco", 18000, 7);
const vela5 = new VelaLiora("Bosque", "pino", "verde", 22000, 4);
const vela6 = new VelaLiora("Mar", "coco", "azul", 20000, 6);
const vela7 = new VelaLiora("Fuego", "canela", "rojo", 30000, 1);
const vela8 = new VelaLiora("Tierra", "sándalo", "marrón", 25000, 3);
const vela9 = new VelaLiora("Cielo", "lavanda y vainilla", "celeste", 28000, 2);
const inventario = new Inventario("Inventario de Velas"); // aca estoy creando una nueva instancia de la clase Inventario, y le estoy pasando como parametro el nombre del inventario, que en este caso es "Inventario de Velas"


inventario.agregarVela(vela1);
inventario.agregarVela(vela2);
inventario.agregarVela(vela3);
inventario.agregarVela(vela4);
inventario.agregarVela(vela5);
inventario.agregarVela(vela6);
inventario.agregarVela(vela7);
inventario.agregarVela(vela8);
inventario.agregarVela(vela9);

let galeria =document.getElementById("galeria"); // creando una variable que se encarga de almacenar el elemento del html que tiene el id galeria, y esto se hace para poder mostrar las velas en el html   
  for(let vela of inventario.velas){ // aca estoy creando un for...of que recorre el arreglo de velas y muestra la informacion de cada vela en el html

let tarjeta = document.createElement("div"); //creando una variable que se encarga de almacenar un elemento del html que se va a crear, y esto se hace para poder mostrar las velas en el html

let nombre = document.createElement("h2"); // creando un elemento del html que se va a crear, y esto se hace para poder mostrar las velas en el html
nombre.textContent = `Nombre: ${vela.nombre}`;
tarjeta.appendChild(nombre); // se usa para mostrar las velas en html


let aroma = document.createElement("p"); // creando un elemento del html que se va a crear, y esto se hace para poder mostrar las velas en el html
aroma.textContent = `Aroma: ${vela.aroma}`; //esto almacena el aroma de la vela dentro de la tarjeta, y esto se hace para poder mostrar las velas en el html 
tarjeta.appendChild(aroma); // se usa para mostrar las velas en html

let color = document.createElement("p"); // creando un elemento del html que se va a crear, y esto se hace para poder mostrar las velas en el html
color.textContent = `Color: ${vela.color}`;
tarjeta.appendChild(color); // se usa para mostrar las velas en html

let precio = document.createElement("p"); // creando un elemento del html que se va a crear, y esto se hace para poder mostrar las velas en el html
precio.textContent = `Precio: $${vela.precio}`;
tarjeta.appendChild(precio); // se usa para mostrar las velas en html

let stock = document.createElement("p"); // creando un elemento del html que se va a crear, y esto se hace para poder mostrar las velas en el html
stock.textContent = `Stock: ${vela.stock}`;
tarjeta.appendChild(stock); // se usa para mostrar las velas en html

galeria.appendChild(tarjeta); // se usa para mostrar las velas en html
}

console.log(vela6.mostrarInformacion());
console.log(vela6.venta(4)); // aca se ingresa la cantidad de velas que se desea comprar, en este caso 4, y se le indica si hay stock suficiente o no
console.log(inventario.venderVela("Mar", 4)); // aca se ingresa la cantidad de velas que se desea comprar, en este caso 4, y se le indica si hay stock suficiente o notock suficiente o no

console.log(inventario.eliminarVela("Mar")); // aca se ingresa el nombre de la vela que se desea eliminar, y se le indica si la vela fue eliminada o no
console.log(inventario.velasStockBajo(3)); // aca se ingresa el limite de stock bajo, en este caso 3, y se le indica si hay velas con stock bajo o no
console.log(inventario.valorTotalInventario()); // aca se muestra el valor total del inventario, que es la suma de todos los precios de las velas multiplicados por su stock