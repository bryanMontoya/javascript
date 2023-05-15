const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log("Nueva petición");
    console.log(req.url);

    switch (req.url){
        case '/hola':
            res.write("Hola, que tal?");
            res.end()
            break;
        default:
            // res.writeHead(201, {'Content-Type': 'text/plain'});
            // res.write("Hola, ya se usar http de nodejs");

            res.write("Error 404: Not found");
            res.end();
    }
}

console.log("Escuchando http por el puerto 3000");