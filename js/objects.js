class Tour {
    constructor() {
        this.locacion;
        this.nombre;
        this.horario;
        this.idioma;
        this.precio;
        this.cantidad;
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

    mostrarPrecio (precio) {
        this.precio = precio;
    }

    elegirCantidad (cantidad) {
        this.cantidad = cantidad;
    }
}

