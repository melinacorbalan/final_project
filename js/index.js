const nuevoTour = new Tour();

const carrito = [];

//ELEGIR LOCACION

let locacionID = Number(prompt(`Selecciona la ciudad ${TOURS.map((tour) => `${tour.ID}) ${tour.ciudad}`).join(' ')}`));

let locacion = TOURS.find((ciudad) => ciudad.ID === locacionID);

nuevoTour.elegirLocacion(locacion.ciudad);

// ELEGIR TOUR


let tourID = Number(
    prompt(`Elige el tour: ${TOURS.filter((tour) => tour.ID === locacionID)
            .map((tour) => `${tour.ID}) ${tour.nombre}`)
            .join(' ')}`, ),
);



if (tourID === locacionID) {

    let tour = TOURS.find((titulo) => titulo.ID === tourID);

    nuevoTour.elegirTour(tour.nombre);

    // ELEGIR HORARIO

    const horarioID = Number(prompt(`A qué hora te gustaría realizar el tour? 1) Mañana 2) Tarde`));

    let horario = 0;

    switch (horarioID) {
        case 1:
            horario = HORARIOS_AM.find((hora) => hora.ID === tourID);
            nuevoTour.elegirHorario(horario.nombre);
            break;
        case 2:
            horario = HORARIOS_PM.find((hora) => hora.ID === tourID);
            nuevoTour.elegirHorario(horario.nombre);
            break;

        default:
            horarioID
            break;
    }

    //ELEGIR IDIOMA

    let idiomaID = Number(prompt(`Selecciona el idioma: ${IDIOMAS.map((idioma) => `${idioma.ID}) ${idioma.nombre}`).join(' ')}`));

    let idioma = IDIOMAS.find((idioma) => idioma.ID === idiomaID);

    nuevoTour.elegirIdioma(idioma.nombre);

    //AGREGAR PERSONAS

    let cantidad = Number(prompt(`Cuantas personas deseas agregar?`));
    nuevoTour.elegirCantidad(cantidad);

    //DETERMINAR PRECIO

    let precio = TOURS.find((precio) => precio.ID === tourID);
    nuevoTour.mostrarPrecio(precio.precio);

    console.log(nuevoTour);
    alert(`Has elegido el tour ${nuevoTour.nombre} en ${nuevoTour.locacion} a las ${nuevoTour.horario} en ${nuevoTour.idioma} para ${cantidad} personas`);

    //CARRITO 

    carrito.push(nuevoTour);

    function totalCompra() {

        let precioTotal = 0;
        for (const tour of carrito) {
            precioTotal = tour.precio * cantidad;
        }
        return alert(`El total de tu compra es de ${precioTotal} euros`);
    }
    
    totalCompra()

    let pagoID = Number(prompt(`Selecciona el método de pago: ${PAGOS.map((pago) => `${pago.ID}) ${pago.nombre}`).join(' ')}`));
    let metodoPago = PAGOS.find((pago) => pago.ID === pagoID);

    //INGRESAR CORREO

    const usuario = prompt(`Por favor ingresa tu correo electrónico:`);

    alert(`Has elegido el método de pago ${metodoPago.nombre}. Pronto recibirás un correo electrónico con la confirmación. Gracias!`)


} else {
    alert(`Por favor ingresa el numero correcto`);
}



