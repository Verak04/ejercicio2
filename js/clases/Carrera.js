const Carrera =
    class Carrera {
        #titulo = undefined;
       
        constructor(titulo) {
            this.#titulo = titulo;
        }
        getTitulo() {
            return this.#titulo;
        }
        
        setTitulo(titulo) {
            this.#titulo;
        }
        
        toString() {
            return "Titulo: "+this.#titulo;
        }

    }

