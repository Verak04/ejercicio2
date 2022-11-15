const Sede =
    class Sede {
        #codigo = undefined;
        #nombre = undefined;
        #direccion = undefined;
        constructor(codigo, nombre, direccion) {
            this.#codigo = codigo;
            this.#nombre = nombre;
            this.#direccion = direccion;
        }
        getCodigo() {
            return this.#codigo;
        }
        getNombre() {
            return this.#nombre;
        }
        getDireccion() {
            return this.#direccion;
        }

        setCodigo(codigo) {
            this.#codigo;
        }
        setNombre(nombre) {
            this.#nombre;
        }
        setDireccion(direccion) {
            this.#direccion
        }

        toString() {
            return "Codigo: " + this.#codigo + " Nombre Inst: " + this.#nombre + " Dirección: " + this.#direccion;
        }

    }

