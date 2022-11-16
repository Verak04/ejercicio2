export const Asignatura =
    class Asignatura {
        #nombre = undefined;
        #cantHoras = undefined;
        #cuatrimestre = undefined;
        #tipo = undefined;

        constructor(nombre, cantHoras, cuatrimetre, tipo) {
            this.#nombre = nombre;
            this.#cantHoras = cantHoras;
            this.#cuatrimestre = cuatrimetre;
            this.#tipo = tipo;
        }
        getNombre() {
            return this.#nombre;
        }
        getCantHoras() {
            return this.#cantHoras;
        }
        getCuatrimestre() {
            return this.#cuatrimestre;
        }
        getTipo() {
            return this.#tipo;
        }

        setNombre(nombre) {
            this.#nombre;
        }
        setCantHoras(cantHoras) {
            this.#cantHoras;
        }
        setCuatrimestre(cuatrimetre) {
            this.#cuatrimestre;
        }
        setTipo(tipo) {
            this.#tipo;
        }
        toString() {
            return "Nombre: " + this.#nombre + " Cantidad de horas: "+this.#cantHoras+" Cuatrimestre: "+this.cuatrimetre+" Tipo: "+this.#tipo;
        }
    }

    
