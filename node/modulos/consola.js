console.clear();

console.group("Conversacion");

console.log("Hola");
console.log("Hola");
console.log("Hola");

console.groupEnd("termina COnversacion");


console.group("Otras funciones");


console.log("Algo");

console.info("Info");

console.error("Error");

console.warn("Warning");

var tabla = [
    {
        a: 1,
        b:'z'
    },
    {
        a: 2,
        b: "Otra"
    }
]
console.log(tabla)
console.table(tabla)


console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");