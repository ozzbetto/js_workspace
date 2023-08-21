
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
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'The Avengers';
    }

    quiensoy() {
        console.log(`Soy ${ this.nombre } del clan ${ this.clan }`);
        super.quiensoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Hombre Araña','Soy Cool');
// const spiderman = new Heroe();

console.log( spiderman );
spiderman.quiensoy();