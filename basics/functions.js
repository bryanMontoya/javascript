//Declarativas
function mifuncion(){
    return 3;
}

mifuncion();

//Expresión: Anónimas:Llama a la funcion con el nombre de la variable.
var miFuncion1 = function(a,b){
    return a + b;
}

miFuncion1();


//Operador ternario
//condition ? true : false
var num = 1;
var resultado = numero === 1 ? "Si numero" : "NO"

//Switch
var num = 1;
switch(num){
    case 1:
        console.log("Soy uno")
        break;
    case 2:
        console.log("Soy dos");
        break;
    default:
        console.log("Otro numero");
}
