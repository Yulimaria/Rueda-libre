/* class Cliente{
    constructor(nombre, cedula){
        this.nombre = nombre;
        this.cedula = cedula;
    }   
    mostrarCliente(){
        return` cliente:${this.nombre} con cedula: ${this.cedula}`;
    }
}

class cuenta {
    constructor(cliente,saldo){
        this.cliente = cliente;
        this.saldo = saldo;

    }
    consultarSaldo(){
        return`El cliente ${this.cliente.nombre} tiene un saldo de: ${this.saldo}`;
    }


}

const cliente1 = new Cliente("pepito", "123456789");
const cuenta1 = new cuenta(cliente1, 1000);
console.log(cliente1.mostrarCliente()); 
console.log(cuenta1.consultarSaldo());
*/

class Libro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
   
       
    }

    mostrarInformacion(){
         if (this.disponible === true){
            return `El libro ${this.titulo} fue escrito por ${this.autor} y esta disponible`;
           
         } else{
          return `El libro ${this.titulo} fue escrito por ${this.autor} y no esta disponible`;
 
       }

    }

}
class Biblioteca{
    constructor(nombre){
        this.nombre = nombre;
        this.libros = [];
    }

    agregarLibro(libros){
        this.libros.push(libros);
        return `El libro ${libros.titulo} fue agregado a la biblioteca ${this.nombre}`;
    }

    mostrarLibros(){
        for(let libro of this.libros){ // se recorre el arreglo de libros y se muestra la información de cada libro
            console.log(libro.mostrarInformacion());
}
    }


    prestarLibro(titulo){
        for(let libro of this.libros){
            if(libro.titulo === titulo){
                if(libro.disponible === true){
                    libro.disponible = false;
                    return `El libro ${libro.titulo} fue prestado correctamente`;
                } else {
                    return `El libro ${libro.titulo} no esta disponible`;
                }
            }
        }

        return `El libro ${titulo} no existe en la biblioteca ${this.nombre}`;
    }

    devolverLibro(titulo){
        for(let libro of this.libros){ // let libro es una variable que se utiliza para recorrer el arreglo de libros
            if(libro.titulo === titulo){// libro.titulo es el titulo del libro que se esta buscando y se compara con el titulo que se pasa como parametro   
                if(libro.disponible === false){ // si el libro no esta disponible, es decir, si esta prestado
                    libro.disponible = true; // se cambia el estado del libro a disponible
                    return `El libro ${libro.titulo} fue devuelto correctamente`;
                
                }
            } else {
                return `El libro ${libro.titulo} no esta prestado`;
            }
        }
         return `El libro ${titulo} no existe en la biblioteca ${this.nombre}`;
}
}
const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry");
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez");


const biblioteca = new Biblioteca("Biblioteca Central");

console.log(libro1.mostrarInformacion());
console.log(libro2.mostrarInformacion());
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
console.log(biblioteca.libros);
console.log(biblioteca.prestarLibro("El principito"));
console.log(biblioteca.prestarLibro("El principito"));
console.log(biblioteca.prestarLibro("Libro inexistente"));



