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
            this.#titulo=titulo;
        }
        
        toString() {
            return "Titulo: "+this.#titulo;
        }

    }

