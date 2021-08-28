const printDetalles = () => {

    let detalleCompra = document.querySelector('.detalle-carrito');

    let printCompra = JSON.parse(localStorage.getItem("compra"));

    if (printCompra != null) {
        printCompra.forEach(e => {

            //CARRITO

            let carrito_tour = document.createElement("div");
            carrito_tour.setAttribute("class", "carrito-tour");
            detalleCompra.appendChild(carrito_tour);

            let detalles_tour = document.createElement("div");
            detalles_tour.setAttribute("class", "detalles-tour");
            carrito_tour.appendChild(detalles_tour);

            let tour_name = document.createElement("p");
            tour_name.textContent = `${e.nombreTour} en ${e.locacion}`;
            detalles_tour.appendChild(tour_name);

            let tour_details = document.createElement("p");
            tour_details.setAttribute("class", "detail");
            tour_details.textContent = `${e.date} ${e.horario} (${e.idioma})`;
            detalles_tour.appendChild(tour_details);

            let total_tour = document.createElement("p");
            total_tour.setAttribute("class", "total-tour");
            total_tour.textContent = `${e.cantidad} x tickets = ${e.precio} EUR`;
            detalles_tour.appendChild(total_tour);


            let opciones = document.createElement("div");
            opciones.setAttribute("class", "opciones");
            carrito_tour.appendChild(opciones);


            //BOTON BORRAR TOUR - AUN SIN FUNCIONAR

            let button = document.createElement("button");
            button.setAttribute("id", "btn-eliminar");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-danger");
            button.textContent = "Eliminar";
            opciones.appendChild(button);
        })

        // PRECIO FINAL 

        const precios = printCompra.map(x => x.precio);
        let sum = 0;
        for (let i = 0; i < precios.length; i++) {
            sum += precios[i];
        }

        let valorTotal = document.createElement("p");
        valorTotal.setAttribute("class", "valor-total");
        valorTotal.textContent = `Precio total: ${sum} EUR`
        detalleCompra.appendChild(valorTotal);

        console.log(sum);



    } else {
        let noTour = document.createElement("p");
        noTour.textContent = "No tienes tours en tu carrito"
        detalleCompra.appendChild(noTour);
    }

}

window.addEventListener("load", printDetalles)

