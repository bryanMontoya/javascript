//const process = require('process');

//Capturar alguna excepcion.

process.on('uncaughtException', (err, origen) => {
    console.error("No se ha capturado la excepcion");
    console.error(err);
})


process.on('beforeExit', () => {
    console.log("EL proceso va a terminar.");
})

process.on('exit', () => {
    console.log("EL proceso acabó.");
    setTimeout(() => {
        console.log("Esto no se va  aver nunca porque ya esta desconectado");
    }, 0)
})

//functionno();
setTimeout(() => {
    console.log("Esto si se va a ver");
}, 0)

console.log("Esto si el error no se recoge no sale");