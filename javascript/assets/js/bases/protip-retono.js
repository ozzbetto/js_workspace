// 

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Betto','Rodriguez');
console.log( persona );


function imprimeArgumentos(){
    console.log( arguments );
}

const imprimeArgumentos2 = (  ...args ) => {
    console.log(args);
    
}

imprimeArgumentos2(10, true, false, 'Betto', 'Hola');


const vuelto = (monto, billete) => {
    console.log( monto - billete );
}

vuelto(50000, 100000);