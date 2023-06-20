////////// CONSTRUCTORA DE PRODUCTOS
class Producto{
    constructor(nombre, precio, img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }
}
//////// PRODUCTOS

const productos = [
    new Producto(
        "zapatillas Adidas originals Yeezy 700 V3 Azareth",
        "$45.000",
        "../assets/img/ozweego.png",
    ),
    new Producto(
        "zapatillas Adidas Originals Ozweego white",
        "$29000",
        "../assets/img/yeezy.png",
    ),
    new Producto(
        "zapatillas AIR JORDAN 1 Retro High",
        "$49.999",
        "../assets/img/jordan1.jpg",
    ),
];



