class Tour {
    constructor(nombre, locacion, precio, horario) {
        this.nombre = nombre;
        this.locacion = locacion;
        this.precio = precio;
        this.horario = horario;
    }

}

const tour1 = new Tour("Harry Potter", "Londres", 50, "10:30 hs");
const tour2 = new Tour("El señor de los anillos", "Nueva Zelanda", 150, "10 hs");
const tour3 = new Tour("Home Alone", "Nueva York", 30, "14 hs");
const tour4 = new Tour("Game of Thrones", "Dubrovnik", 100, "9 hs");
const tour5 = new Tour("Comer Rezar Amar", "Roma", 0, "9:30 hs");
const tour6 = new Tour("Amelie", "Paris", 50, "10 hs");


let carrito = [];

let seleccionar = Number(prompt(`Que tour deseas reservar? Elige de 1 a 6`));

let cantidad = Number(prompt(`Cuantas personas deseas agregar?`))

if (cantidad > 0) {

    switch (seleccionar) {

        case 1:
            carrito.push(tour1);
            alert(`Has elegido el tour ${tour1.nombre} en ${tour1.locacion} a las ${tour1.horario} para ${cantidad} personas`);
            break;
        case 2:
            carrito.push(tour2);
            alert(`Has elegido el tour ${tour2.nombre} en ${tour2.locacion} a las ${tour2.horario} para ${cantidad} personas`)
            break;
        case 3:
            carrito.push(tour3);
            alert(`Has elegido el tour ${tour3.nombre} en ${tour3.locacion} a las ${tour3.horario} para ${cantidad} personas`)
            break;
        case 4:
            carrito.push(tour4);
            alert(`Has elegido el tour ${tour4.nombre} en ${tour4.locacion} a las ${tour4.horario} para ${cantidad} personas`)
            break;
        case 5:
            carrito.push(tour5);
            alert(`Has elegido el tour ${tour5.nombre} en ${tour5.locacion} a las ${tour5.horario} para ${cantidad} personas`)
            break;
        case 6:
            carrito.push(tour6);
            alert(`Has elegido el tour ${tour6.nombre} en ${tour6.locacion} a las ${tour6.horario} para ${cantidad} personas`)
            break;
        default:
            alert("Por favor intente nuevamente")
            break;
    }

} else {
    alert("Vuelve pronto!")
}

function totalCompra() {

    let precioTotal = 0;
    for (const tour of carrito) {
        precioTotal = tour.precio * cantidad;
    }
    return alert(`El total de tu compra es de ${precioTotal} euros`);
}

totalCompra()

