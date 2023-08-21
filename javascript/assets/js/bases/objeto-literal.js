let personaje = {
    nombre: 'Tony Stark',
    edad: 40,
    profesion: 'Ingeniero',
    codeName: 'Iron Man',
    vivo: false,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V','Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log('Datos:', personaje.nombre, personaje.edad);
console.log( personaje );
console.log('Profesion: ', personaje['profesion']);
console.log('Coordenadas: ',personaje.coords.lat);
console.log('3er traje: ', personaje.trajes[2])
console.log('Cantidad de trajes: ', personaje.trajes.length);

const x = 'vivo';
console.log('Estado:', personaje[x]);

delete personaje.edad;

console.log( personaje );

Object.freeze( personaje );

personaje.dinero = 45999;

console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
console.log( propiedades );
