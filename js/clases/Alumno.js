export const Alumno =
    class Alumno {
        #nombre = undefined;
        #apellido = undefined;
        #dni = undefined;
        #domicilio = undefined;
        #carrera = undefined;
        #asigCursando = undefined;
        #asigCursada = undefined;
        constructor(nombre, apellido, dni, domicilio, carrera, asigCursando, asigCursada) {
            this.#nombre = nombre;
            this.#apellido = apellido;
            this.#dni = dni;
            this.#domicilio = domicilio;
            this.#carrera = carrera;
            this.#asigCursando = asigCursando;
            this.#asigCursada = asigCursada;
        }
        getNombre() {
            return this.#nombre;
        }
        getApellido() {
            return this.#apellido;
        }
        getDni() {
            return this.#dni;
        }
        getDomicilio() {
            return this.#domicilio;
        }
        getCarrera() {
            return this.#carrera;
        }
        getAsigCursando() {
            return this.#asigCursando;
        }
        getAsigCursada() {
            return this.#asigCursada
        }

        setNombre(nombre) {
            this.#nombre;
        }
        setApellido(apellido) {
            this.#apellido;
        }
        setDni(dni) {
            this.#dni;
        }
        setDomicilio(domicilio) {
            this.#domicilio;
        }
        setCarrera(carrrera) {
            this.#carrera;
        }
        setAsigCursando(asigCursando) {
            this.#asigCursando;
        }
        setasigCursada(asigCursada) {
            this.#asigCursada;
        }
        toString() {
            return "Nombre: " + this.#nombre + " Apellido: " +this.#apellido + " Dni: " + this.#dni + " Domicilio: " + this.#domicilio + " Carrera: " + this.#carrera + " Asignatura en curso: " + this.#asigCursando + " Asignatura cursada: " + this.#asigCursada;
        }

    }


