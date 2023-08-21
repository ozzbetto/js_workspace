class Singleton {

    static instancia;
    nombre = '';
    
    constructor( nombre = '') {
        if ( !!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Iron Maiden');
const instancia2 = new Singleton('Metallica');
const instancia3 = new Singleton('Sepultura');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia1 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia1 es: ${ instancia3.nombre }`);
