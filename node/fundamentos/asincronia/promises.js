function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1000)
    });
}

function hablar(nombre){
    return new Promise ( (resolve, reject) => {
        setTimeout(function() {
            console.log("bla, bla bla");
            //resolve(nombre);
            reject("Hay un error");
        }, 1000);
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Adios " + nombre);
            resolve(nombre);
        }, 1000);
    })
}

// ---
console.log("Iniciando el proceso...")

hola("Carlos")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {  //--Igual a definir una function
        console.log("Terminado el proceso:" + nombre);
    })
    .catch(error => {
        console.error("Un error parce");
        console.error(error);
    })
