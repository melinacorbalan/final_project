const printDetalles = () => {

    let detalleCompra = $(".detalle-carrito");

    let printCompra = JSON.parse(localStorage.getItem("compra"));

    if (printCompra != null) {
        printCompra.forEach(e => {

            //CARRITO

            let carrito_tour = detalleCompra.append(`
            <div class="carrito-tour">
                <div class="detalles-tour">
                <p>${e.nombreTour} en ${e.locacion}</p>
                <p class="detail">${e.date} ${e.horario} (${e.idioma})</p>
                <p class="total-tour">${e.cantidad} x tickets = ${e.precio} EUR</p>
                </div>
                <div class="opciones">
                <button id="${e.id}" type="button" class="btn btn-danger" onclick=deleteTour(${e.id})>Eliminar</button>
                </div>
            </div>
            `);

        })

        // PRECIO FINAL 

        const precios = printCompra.map(x => x.precio);
        let sum = 0;
        for (let i = 0; i < precios.length; i++) {
            sum += precios[i];
        }

        //IMPRIMIR FORM SI HAY COMPRAS EN EL CARRITO

        if (sum == 0) {
            let valorTotal = detalleCompra.append(`<p class="no-tours">No tienes tours en tu carrito</p>`);
            $("form").addClass("no-display");

        } else {
            valorTotal = detalleCompra.append(`<p class="valor-total">Precio total: ${sum} EUR</p>`);
        }

    } else {
        let carritoVacio = detalleCompra.append(`<p class="no-tours">No tienes tours en tu carrito</p>`);
        $("form").addClass("no-display");
    }
}

$(window).on("load", printDetalles);


const deleteTour = () => {

    let allTours = JSON.parse(localStorage.getItem("compra"))

    allTours.forEach(e => {
        id = e.id;
    })

    let allToursUpdate = allTours.filter(e => e.id != id);

    localStorage.setItem("compra", JSON.stringify(allToursUpdate));

    location.reload()

}



