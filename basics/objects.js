var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2020,
    detalleAuto: function(){
        console.log("Auto" + this.modelo + this.year)
    }
};

carro.marca
carro.detalleAuto()

//---------------------------------
function auto(marca, modelo, year){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}
