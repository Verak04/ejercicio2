const Sede =
    class Sede extends Carrera{
        #codigo = undefined;
        #nombre = undefined;
        #direccion = undefined;
        constructor(titulo, codigo, nombre, direccion) {
            super(titulo);
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
            this.#codigo=codigo;
        }
        setNombre(nombre) {
            this.#nombre=nombre;
        }
        setDireccion(direccion) {
            this.#direccion=direccion;
        }

        toString() {
            return "Codigo: " + this.#codigo + " Nombre Inst: " + this.#nombre + " Dirección: " + this.#direccion;
        }

    }

