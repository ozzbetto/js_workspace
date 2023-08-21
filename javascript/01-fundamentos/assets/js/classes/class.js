
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre );
        console.log('Hola a todos soy un método estático...');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {
        if( !nombre || !codigo || !frase ) throw Error('Faltan datos');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quiensoy() {
        console.log(`Soy ${ this.nombre }  y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('Peter','El hombre Araña','Soy bueno');
const ironman = new Persona('Jack','Chupita', 'Soy lindo');

// console.log( spiderman );

spiderman.setComidaFavorita = 'Milanesas con ketchup';
// spiderman.nemesis = 'Duende Verde';
// console.log( spiderman.getComidaFavorita );

// console.log( spiderman );

// Persona._conteo = 2;
console.log('Conteo estático:', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();


