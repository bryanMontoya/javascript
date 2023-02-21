async function hola(nombre){
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("Hola ", nombre);
            resolve(nombre);
        }, 2000);
    });
}

async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Estoy hablando");
            resolve("Error");
        }, 1000);
    });  
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    });
}

async function main(){
    let nombre = await hola("Brayan");
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Terminando");
}

console.log("Iniciando");
main()
console.log("Segunda instruccion");
