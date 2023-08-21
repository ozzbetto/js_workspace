const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}


console.warn('Not o la negación');
console.log( !true );
console.log( !false );


console.log( !regresaFalse() )

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo';
const a2 = 'Hola ' && 'Mundo'

console.log( { a1, a2 });
