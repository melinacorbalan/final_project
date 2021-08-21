const listado_pedido = document.querySelector('#compra');

//MOSTRAR EN PANTALLA

const mostrarCompra = (compra) => {


    const nombre_locacion = document.createElement('p');
    nombre_locacion.textContent = `Locacion: ${nuevoTour.locacion}`;

    const nombre_tour = document.createElement('p');
    nombre_tour.textContent = `Tour: ${nuevoTour.nombre}`;

    const nombre_horario = document.createElement('p');
    nombre_horario.textContent = `Horario: ${nuevoTour.horario}`;

    const nombre_idioma = document.createElement('p');
    nombre_idioma.textContent = `Idioma: ${nuevoTour.idioma} `;

    const nombre_cantidad = document.createElement('p');
    nombre_cantidad.textContent = `Cantidad: ${nuevoTour.cantidad}`;

    const monto_total = document.createElement('p');
    monto_total.textContent = `Precio final: ${nuevoTour.precio} euros`;


    listado_pedido.appendChild(nombre_locacion);
    listado_pedido.appendChild(nombre_tour);
    listado_pedido.appendChild(nombre_horario);
    listado_pedido.appendChild(nombre_idioma);
    listado_pedido.appendChild(nombre_cantidad);
    listado_pedido.appendChild(monto_total);

    return compra;
}



const mostrarFormaPago = document.querySelector('#pago');

const formaPago = (pago) => {

    const forma_pago = document.createElement('p');
    forma_pago.textContent = `Has elegido el método de pago ${nuevoPago.pago}. Pronto recibirás un correo electrónico con la confirmación. Gracias!`;

    mostrarFormaPago.appendChild(forma_pago);

    return pago;
}



