// function saludar() {
//     console.log('Hola que tal');
    
// }

// saludar();

// Definición de un método
let myObjeto ={
    nombre: 'John Connor',
    mision: 'Salvar a la humanidad.',
    saludo: function() {
        console.log('Hola, '+ this.nombre + '!!' + ' tu misión es: ' + this.mision);
    }
}


myObjeto.saludo();


function saludar2(nombre) {
    console.log('Buenos dias, ' + nombre);
}

saludar2('Santino');


const saludar3 = (nombre, apellido) => {
    console.log('Hola, ' + nombre, apellido);
    return 1;
}

const retornoDeSaludar = saludar3('Francisco', 'Rodriguez');

if( retornoDeSaludar ) {
    console.log('El retorno devolvió: ', retornoDeSaludar);
} else {
    console.log('El retorno no devolvió nada');
}


function sumar(a, b){
    return (a + b)
}

console.log( sumar( 3, 2 ) );

const sumar2 = (a, b) => {
    return (a * b);
}

console.log( sumar2(5,2) );

// Si solo tenenos un return
const multiplicar = (a, b) => a * b

console.log( multiplicar(2,3));


const getAleatorio = () => Math.random();
console.log( getAleatorio() );

