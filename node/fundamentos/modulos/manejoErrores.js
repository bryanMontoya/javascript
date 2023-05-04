console.clear();

function otraFuncion(){
    serompe()
}


function serompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){
        try {
            return 3 + z;  
        } catch (error) {
            console.error("Ocurrio un error");
            cb(error);
        }
    });
}

try {
    //otraFuncion();
    seRompeAsincrona(function(){
        console.log("Hay error");
    });
} catch (error) {
    console.error("Un error");
    console.error(error.message)
}
