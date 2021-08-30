
class TOUR {
    constructor(locacion, nombreTour, date, horario, idioma, cantidad, precio, id) {
        this.locacion = locacion;
        this.nombreTour = nombreTour;
        this.date = date;
        this.horario = horario;
        this.idioma = idioma;
        this.cantidad = cantidad;
        this.precio = precio;
        this.id = id;
    }
}


let compra = [];

// TRAER BOTON AGREGAR CARRITO

let btnCarrito = document.querySelector('#btn-carrito');

// TRAER PAGINA DEL TOUR CON ID

let nameID = document.querySelector('main').id;

// IMPRIMIR EN MAIN //


//  HORARIOS //

let classHorarios = document.querySelectorAll('.horarios');

let horarioAM = (HORARIOS_AM.find((hora) => hora.ID == nameID)).nombre;
let horarioPM = (HORARIOS_PM.find((hora) => hora.ID == nameID)).nombre;

let printHorarioAM = document.createElement("p");
printHorarioAM.setAttribute("class", "sub-text");
printHorarioAM.textContent = horarioAM;
classHorarios[0].appendChild(printHorarioAM);

let printHorarioPM = document.createElement("p");
printHorarioPM.setAttribute("class", "sub-text");
printHorarioPM.textContent = horarioPM;
classHorarios[0].appendChild(printHorarioPM);


// IDIOMAS //


let classIdiomas = document.querySelectorAll('.idiomas');

let idiomas = IDIOMAS;

let printES = document.createElement("p");
printES.setAttribute("class", "sub-text");
printES.textContent = idiomas[0];
classIdiomas[0].appendChild(printES);

let printEN = document.createElement("p");
printEN.setAttribute("class", "sub-text");
printEN.textContent = idiomas[1];
classIdiomas[0].appendChild(printEN);

// PRECIO TOUR

let classPrecio = document.querySelector('.precio');

let precioTour = (tours.find((precio) => precio.ID == nameID)).precio;

let printPrecio = document.createElement("p");
printPrecio.setAttribute("class", "sub-text"), ("id", "precio");
printPrecio.textContent = `€ ${precioTour}`;
classPrecio.appendChild(printPrecio);

// LOCACION

let classLocacion = document.querySelector('.locacion');

let locacion = (tours.find((locacion) => locacion.ID == nameID)).locacion;

let printLocacion = document.createElement("p");
printLocacion.textContent = locacion;
classLocacion.appendChild(printLocacion);



// IMPRIMIR EN MODAL //

// NOMBRE TOUR

let name_tour = (tours.find((nombre) => nombre.ID == nameID)).nombre;

let title_tour = document.querySelector('.name-tour');
title_tour.textContent = `${name_tour}`


//HORARIOS EN FORM

let printHorarioAM_form = document.createElement("option");
printHorarioAM_form.setAttribute("value", horarioAM);
printHorarioAM_form.textContent = horarioAM;
classHorarios[1].appendChild(printHorarioAM_form);


let printHorarioPM_form = document.createElement("option");
printHorarioPM_form.setAttribute("value", horarioPM);
printHorarioPM_form.textContent = horarioPM;
classHorarios[1].appendChild(printHorarioPM_form);

// IDIOMAS EN FORM

let printES_form = document.createElement("option");
printES_form.setAttribute("value", idiomas[0]);
printES_form.textContent = idiomas[0];
classIdiomas[1].appendChild(printES_form);

let printEN_form = document.createElement("option");
printEN_form.setAttribute("value", idiomas[1]);
printEN_form.textContent = idiomas[1];
classIdiomas[1].appendChild(printEN_form);



//DATOS DEL INPUT

let dia = document.querySelector('#date').value;

let horario = document.querySelector('#horario').value;

let idioma = document.querySelector('#idioma').value;

let cantidad = document.querySelector('#cantidad');

let precioFinal = 0;


let mostrarCantidad = () => {

    let mostrarPrecio = document.querySelector('.valorTotal');
    mostrarPrecio.textContent = `Valor total: ${cantidad.value*precioTour} EUR`;
}

document.querySelector('#cantidad').addEventListener("change", mostrarCantidad);

const data = () => {

    let tickets = cantidad.value;

    precioFinal = precioTour * cantidad.value;

    if (JSON.parse(localStorage.getItem("compra") != null)) {

        if ((document.querySelector('#cantidad').value) > 0) {

            compra = JSON.parse(localStorage.getItem("compra")) //actualizo con la informacion del local mi array
            let id = compra.length + 1
            let nuevo_tour = new TOUR(locacion, name_tour, dia, horario, idioma, tickets, precioFinal, id); // Creo nuevo tour
            compra.push(nuevo_tour);
            localStorage.setItem("compra", JSON.stringify(compra)); // Actualizo array

            console.log(compra);

        } else {
            cantidad.style.border = "1px solid red";
        }

    } else {

        if ((document.querySelector('#cantidad').value) > 0) {


            let id = 1;
            let nuevo_tour = new TOUR(locacion, name_tour, dia, horario, idioma, tickets, precioFinal, id);
            compra.push(nuevo_tour);

            localStorage.setItem("compra", JSON.stringify(compra));

            console.log(compra);


        } else {
            cantidad.style.border = "1px solid red";
        }
    }

}

// CERRAR 1° MODAL SI CANTIDAD > 0

const closeModal = () => {

    if ((document.querySelector('#cantidad').value) > 0) {

        btnCarrito.setAttribute("data-bs-dismiss", "modal");
        btnCarrito.setAttribute("data-bs-toggle", "modal");

    }
}

// NOTIFICACION EN CARRITO 

const addNotification = () => {

    let navCarrito = document.querySelector('#nav-carrito');
    let notification = document.createElement("span");
    notification.setAttribute("class", "position-absolute top-20 start-70 translate-middle p-2 bg-warning border border-light rounded-circle")
    navCarrito.appendChild(notification);

}

    
btnCarrito.addEventListener("click", data);

btnCarrito.addEventListener("mouseup", closeModal);

document.querySelector('#close-modal-carrito').addEventListener("click", addNotification);
document.querySelector('#back-tours').addEventListener("click", addNotification);


// IMPRIMIR MODAL CON TOUR AGREGADO A CARRITO

let modalCarrito = document.querySelector('#add-tour');
let printTourModal = document.createElement("p");
printTourModal.textContent = `Has agregado el tour ${name_tour} a tu carrito!`;
modalCarrito.appendChild(printTourModal);

// RELOAD AL CERRAR MODAL 


document.querySelector('#close-modal').addEventListener("click", () => {
    location.reload();
})
