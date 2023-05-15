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
    seRompeAsincrona(function(error){
        console.log("Hay error");
        console.error(error.message);
    });
} catch (error) {
    console.error("Un error");
    console.error(error.message)
}
