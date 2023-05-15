const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        //Leido
        if (err)
            console.error("Error");
        else
            cb(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function (err){
        if (err){
            cb('No he podido escribir', err)
        }
        else{
            cb("Se ha escrito bien");
        }
    });
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}

//borrar(__dirname + '/archivo1.txt');
leer(__dirname + '/archivo.txt', console.log);
//escribir(__dirname + '/archivo1.txt', "Soy un archivo nuevo", console.log)