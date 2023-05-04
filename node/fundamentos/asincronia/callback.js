function hola(nombre, miCallback){
    setTimeout(function() {
        console.log("Hola " + nombre);
        miCallback(nombre);
    }, 2000)
}

function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log("Adios " + nombre);
        otrocallback();
    }, 1000);
}

console.log("Iniciando");

hola("Brayan", function(nombre){
    adios(nombre, function(){
        console.log("Terminando Proceso...")
    });    
}); 


