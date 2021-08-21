const nuevoTour = new Tour();

const nuevoPago = new Pagos();


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

    let precioID = TOURS.find((precio) => precio.ID === tourID);

    let precioTour = precioID.precio;

    let precioFinal = precioTour*cantidad;

    nuevoTour.mostrarPrecio(precioFinal);

    alert(`Has elegido el tour ${nuevoTour.nombre} en ${nuevoTour.locacion} a las ${nuevoTour.horario} en ${nuevoTour.idioma} para ${cantidad} personas`);

    //CARRITO 
    
    alert (`El total de tu compra es de ${precioFinal} euros`);


    //INGRESAR CORREO

    const usuario = prompt(`Por favor ingresa tu correo electrónico:`);

    let pagoID = Number(prompt(`Selecciona el método de pago: ${PAGOS.map((pago) => `${pago.ID}) ${pago.nombre}`).join(' ')}`));
    let pago = PAGOS.find((pago) => pago.ID === pagoID);

    nuevoPago.metodoPago(pago.nombre);

    console.log(nuevoTour);

    mostrarCompra();
    formaPago();


} else {
    alert(`Por favor intenta de nuevo`);
}



