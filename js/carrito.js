const printDetalles = () => {

    let confirm = $(".confirm-user");
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

        if (sum == 0) {
            let valorTotal = detalleCompra.append(`<p>No tienes tours en tu carrito</p>`);
        } else {
            valorTotal = detalleCompra.append(`<p class="valor-total">Precio total: ${sum} EUR</p>`);

            let confirm_user = confirm.append(`

            <form>
                <div class="ingreso-email">
                    <label for="email">Ingresa tu email para recibir tickets y confirmación de compra<span>*</span></label>
                    <input type="email" required>
                    <div class="suscripcion">
                        <input type="checkbox" name="checkbox" id="checkboxSubscribe">
                        <label for="checkbox">Quiero suscribirme a los emails promociones y recibir ofertas y descuentos exclusivos.</label>
                    </div>
                </div>
                
                <div class="aceptar">
                    <div class="checkboxes">
                        <div class="checkboxTerms">
                            <label for="checkboxTerms">Acepto los Términos y Condiciones<span>*</span></label>
                            <input type="checkbox" name="checkboxTerms" required>
                        </div>
                        <div class="checkboxPrivacy">
                        <label for="checkboxPrivacy">Acepto la Política de Privacidad<span>*</span></label>
                        <input type="checkbox" name="checkboxPrivacy" required>
                        </div>
                    </div>
                    <div class="btn-continuar">
                        <button class="btn btn-danger">Continuar</button>
                    </div>
                </div>
            </form>

            `)
        }

    } else {
        let carritoVacio = detalleCompra.append(`<p>No tienes tours en tu carrito</p>`);
    }
}

window.addEventListener("load", printDetalles)


const deleteTour = () => {

    let allTours = JSON.parse(localStorage.getItem("compra"))

    allTours.forEach(e => {
        id = e.id;
    })

    let allToursUpdate = allTours.filter(e => e.id != id);

    localStorage.setItem("compra", JSON.stringify(allToursUpdate));

    location.reload()

}