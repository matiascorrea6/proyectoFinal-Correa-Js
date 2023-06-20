///////// BOTON DE BUSQUEDA DE PRODUCTOS
function busqueda(){
    let nombre = prompt("ingrese el nombre de alguno de los siguientes productos para verificar existencia: zapatillas AIR JORDAN 1 Retro High // zapatillas Adidas Originals Ozweego white // zapatillas Adidas originals Yeezy 700 V3 Azareth");
    let encontrado = productos.find(p=> p.nombre === nombre);

    if (encontrado){
        alert ("Producto encontrado, buscar en tienda");
    }else{
        alert("producto no encontrado, buscar otro modelo");
    }
}
let boton = document.getElementById("boton");
const botonBusqueda = () => {
    busqueda();
}
boton.addEventListener("click", botonBusqueda);
