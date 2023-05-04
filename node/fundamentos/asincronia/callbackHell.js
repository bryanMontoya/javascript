function hola(nombre, miCallback){
    setTimeout(function() {
        console.log("Hola " + nombre);
        miCallback(nombre);
    }, 2000)
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log("bla, bla bla");
        callbackHablar();
    }, 2000);
}

function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log("Adios " + nombre);
        otrocallback();
    }, 1000);
}

function conversacion(nombre, veces, callback){
    if (veces>0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}
//---
console.log("Iniciando");
hola("Carlos", function(nombre){
    conversacion(nombre, 3, function(){
        console.log("Proceso terminado");
    })
})
// hola("Brayan", function(nombre){
//     hablar(function(){
//         hablar(function(){
//             adios(nombre, function(){
//                 console.log("Terminando Proceso...")
//             });    
//         })
//     })
// }); 
