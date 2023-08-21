
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

while( i < carros.length) {
    if(i === 1) {
        i++;
        console.log(carros.push('Chevrolet') ); 
        continue;
    }

    console.log( carros[i]);
    i++;
}

// Do While
let j = 0;
do {
    console.log( carros[j]);
    j++;
} while( carros[j] );