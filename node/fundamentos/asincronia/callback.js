/*function hola(nombre, miCallback){
    setTimeout(function(){
        console.log("Hola asincrona " + nombre); //Asincrona espera 1000 ms
        miCallback(nombre);
    }, 1500)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log("Adios, " + nombre);
        otroCallback();
    }, 1000)
}

console.log('Iniciando Proceso...')
hola('carlos' ,function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso')
    });    
});

// hola('Carlos', function(){})
// adios('Carlos', function(){})*/


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


