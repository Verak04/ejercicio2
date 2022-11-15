/*DNI, nombre, dirección y departamento al que 
pertenece. También se podrá consultar las 
distintas asignaturas que imparte.*/
const Profesor =
    class Profesor {
        #dni = undefined;
        #nombre = undefined;
        #direccion = undefined;
        #departamento = undefined;
        constructor(dni, nombre, direccion, departamento) {
            this.#dni = dni;
            this.#nombre = nombre;
            this.#direccion = direccion;
            this.#departamento = departamento;
        }

        getDni() {
            return this.#dni;
        }
        getNombre() {
            return this.#nombre;
        }
        getDirecion() {
            return this.#direccion;
        }
        getDepartamento() {
            return this.#departamento;
        }
        setDni(dni) {
             this.#dni;
        }
        setNombre(nombre) {
             this.#nombre;
        }
        setDirecion(direccion) {
             this.#direccion;
        }
        setDepartamento(departamento) {
             this.#departamento;
        }
        toString(){
            return "Dni: "+this.#dni+" Nombre: "+this.#nombre+" Dirección: "+this.#direccion+" Departamento: "+this.#departamento;
        }

    }