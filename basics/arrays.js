var names = ["Andres", "Ramiro", "Silvia"]
names.push(4,5)

names.unshift(1,2,3,4,5)

names.pop()
names.shift()
names.indexOf("hola") //-1 si no existe

names.length

//Arrays methods
var articulos = [
    {nombre:"bici", costo:3000},
    {nombre:"tv", costo:4000},
    {nombre:"celu", costo:1000},
    {nombre:"libro", costo:300},
    {nombre:"audi", costo:350},
    {nombre:"pc", costo:3500},
    {nombre:"x", costo:30}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo < 500
});

//Recorre todos
var articulosNombres = articulos.map(function(articulo){
    return articulo.nombre
});

//Devuelve el primero
var articulosEncontrados = articulos.find(function(articulo){
    return articulo.nombre === "bici"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Existe articulo
var artiSome = articulos.some(function(articulo){
    return articulo.costo <= 700
});

