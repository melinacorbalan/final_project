const printDetalles = () => {

    let detalleCompra = $("#detalle-carrito");

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

        localStorage.setItem("total", sum);

        //IMPRIMIR FORM SI HAY COMPRAS EN EL CARRITO

        if (sum == 0) {
            let valorTotal = detalleCompra.append(`<p class="no-tours">No tienes tours en tu carrito</p>`);
            $("form").addClass("no-display");
            localStorage.clear();

        } else {
            valorTotal = detalleCompra.append(`<p class="valor-total">Precio total: ${sum} EUR</p>`);

        }

    } else {
        let carritoVacio = detalleCompra.append(`<p class="no-tours">No tienes tours en tu carrito</p>`);
        $("form").addClass("no-display");
    }
}

$(window).on("load", printDetalles);


const deleteTour = (id) => {

    let allTours = JSON.parse(localStorage.getItem("compra"))

    allTours.forEach(e => {

        let allToursUpdate = allTours.filter(e => e.id != id);

        localStorage.setItem("compra", JSON.stringify(allToursUpdate));

        location.reload();

    })
}

// HABILITAR - DESAHABILITAR BOTON CON CHECKBOX

const checkbox_checked = () => {
    let checkbox1 = document.querySelector('#checkboxTerms').checked;
    let checkbox2 = document.querySelector('#checkboxPrivacy').checked;
    let btn = document.querySelector('#btn-continue');
    let email = document.querySelector('#email').value;

    if ((checkbox1 == true) && (checkbox2 == true) && (email != "")) {
        btn.toggleAttribute("disabled");
    } else {
        document.querySelector('#email').style.border = "1px solid red"
    }

    document.querySelector('#email').addEventListener("focusout", () => {
        let btn = document.querySelector('#btn-continue');
        let email = document.querySelector('#email').value;
    
        if (email != "") {
            btn.toggleAttribute("disabled");
        }
    })
}

(document.querySelector('#checkboxTerms')), (document.querySelector('#checkboxPrivacy'))
.addEventListener("click", () => {
    checkbox_checked()
})

document.querySelector('#btn-continue').addEventListener("click", (e) => {
    e.preventDefault();
})



// IMPRIMIR NOMBRE TOUR EN MODAL

let toursCarrito = JSON.parse(localStorage.getItem("compra"));

if (toursCarrito != null) {
    toursCarrito.forEach(e => {
        $(".modal-header").prepend(`
            <h5 class="modal-title">${e.nombreTour} en ${e.locacion}</h5>
            <p>${e.date} ${e.horario} (${e.idioma}) x ${e.cantidad}</p>
        `)
    });
}

$(window).on("load", () => {

    $("#pay-cash").append(`
    <p> Deberás abonar el total de ${localStorage.getItem("total")} EUR a nuestro tour manager el día del tour</p>
    `)

});


// API

const URL = "https://restcountries.eu/rest/v2/all";

$.get(URL, (data, status) => {
    if (status === "success") {

        data.forEach(e => {

            $("#country").append(`
           <option value="${e.name}">${e.name}</option>
           `)

        });
    }
})


// ESCONDER FORM ANTERIOR AL CONTINUAR
$("#btn-confirm").click(() => {
    $(".form-1").hide();

    $(".form-2").fadeIn("slow", "linear");
})

// MOSTRAR EL FORM ANTERIOR AL VOLVER
$("#btn-back-form").click((e) => {

    e.preventDefault();

    $(".form-1").fadeIn("fast", "linear")

    $(".form-2").hide();
});

$("#btn-volver").click(() => {
    location.reload();
});

$("#btn-checkout").click((e) => {

    e.preventDefault();

    $("#alert").append(`
    <img src="https://qrtag.net/api/qr_8.png" alt="qrtag">
    `)

    $("#alert").removeClass("no-alert");
    $("#alert").addClass("alert");

    $("#carrito").removeClass("carrito");
    $("#carrito").addClass("carrito-no-display");

    localStorage.clear();
})


const reload = () => {

    $(window).on("load", () => {
        $("#alert").removeClass("alert");
        $("#alert").addClass("no-alert");
    });

};

reload();