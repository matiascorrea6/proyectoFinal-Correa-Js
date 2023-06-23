///////// BOTON DE BUSQUEDA DE PRODUCTOS
function busqueda(){
    let nombre = prompt("ingrese el nombre de alguno de los siguientes productos para verificar existencia: zapatillas AIR JORDAN 1 Retro High // zapatillas Adidas Originals Ozweego white // zapatillas Adidas originals Yeezy 700 V3 Azareth");
    let encontrado = productos.find(p=> p.nombre === nombre);

    if (encontrado){
        Swal.fire({
            title: 'Hay stock!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat`,
        });
        }else{
            Swal.fire({
                title: 'No hay stock :(',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat`,
            });
    }
}

let boton = document.getElementById("boton");
const botonBusqueda = () => {
    busqueda();
}
boton.addEventListener("click", botonBusqueda);
