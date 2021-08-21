class Tour {
    constructor() {
        this.locacion;
        this.nombre;
        this.horario;
        this.idioma;
        this.cantidad;
        this.precio;
    }

    elegirLocacion(locacion) {
        this.locacion = locacion;
    }

    elegirTour (nombre) {
        this.nombre = nombre;
    }

    elegirHorario (horario) {
        this.horario = horario;
    }

    elegirIdioma (idioma) {
        this.idioma = idioma;
    }

    elegirCantidad (cantidad) {
        this.cantidad = cantidad;
    }

    mostrarPrecio (precio) {
        this.precio = precio;
    }
}

class Pagos {
    constructor() {
        this.pago;
    }

    metodoPago(pago) {
        this.pago = pago;
    }
}