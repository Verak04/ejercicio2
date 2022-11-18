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
        return "Nombre: " + this.#nombre + " Apellido: " + this.#apellido + " Dni: " + this.#dni + " Domicilio: " + this.#domicilio + " Carrera: " + this.#carrera + " Asignatura en curso: " + this.#asigCursando + " Asignatura cursada: " + this.#asigCursada;
    }

}



Carrera =
    class Carrera {
        #titulo = undefined;

        constructor(titulo) {
            this.#titulo = titulo;
        }
        getTitulo() {
            return this.#titulo;
        }

        setTitulo(titulo) {
            this.#titulo = titulo;
        }

        toString() {
            return "Titulo: " + this.#titulo;
        }

    }

const Sede =
    class Sede extends Carrera {
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
            this.#codigo = codigo;
        }
        setNombre(nombre) {
            this.#nombre = nombre;
        }
        setDireccion(direccion) {
            this.#direccion = direccion;
        }

        toString() {
            return "Codigo: " + this.#codigo + " Nombre Inst: " + this.#nombre + " Dirección: " + this.#direccion;
        }

    }



var sede = [];

var j = 0;
var posicion = 0;
var ide = "";

function sedes() {
    console.log(sede);
    document.getElementById("sedes").innerHTML = " "
    for (let i = 0; i < sede.length; i++) {
        posicion = i;
        ide = "sede" + i;
        document.getElementById("sedes").innerHTML += "<ul id='" + ide + "'><li >" + sede[i].getCodigo() + "</li><li>" + sede[i].getNombre() + "</li><li>" + sede[i].getDireccion() + "</li><li>" + sede[i].getTitulo() + "</li><li><input type='button' value='Editar' id='editar' onclick='editar_sede(" + posicion + ")'><input type='button' value='Borrar' id='borrar' onclick='borrar_sede(" + posicion + ")'</li></ul>";
    }
}
function ingresar_sede() {
    for (let i = j; flog = true; i++) {
        console.log(sede);
        let titulo = document.getElementById("titulo").value;
        let codigo = document.getElementById("codigo").value;
        let nombre = document.getElementById("nombre").value;
        let direccion = document.getElementById("direccion").value;
        sede[i] = new Sede(titulo, codigo, nombre, direccion);
        j++;
        sedes();
        form.reset();
        break;
    }


}

function editar_sede(posicion) {
    document.getElementById("editar_sede").innerHTML = "<div id='formulario_editar'><div class='editar_sede' ><h3>Código: " + sede[posicion].getCodigo() + "</h3><h3>Institución: " + sede[posicion].getNombre() + "</h3><h3>Dirección: " + sede[posicion].getDireccion() + "</h3><h3>Carrera: " + sede[posicion].getTitulo() + "</h3></div><div id='formulario' class='editar_sede'><form action='' id='form_editar'><input id='codigo1' type='text' placeholder='Codigo de institución.'><input id='nombre1' type='text' placeholder='Nombre de institución.'><input id='direccion1' type='text' placeholder='Direción.'><input id='titulo1' type='text' placeholder='Carrera dictada.'><input type='button' value='Modificar' id='boton' onclick='modificar_sede(" + posicion + ")'><input type='button' value='Salir' id='boton' onclick='salir_sede()'></form></div></div>"
};
function salir_sede() {
    let div = document.getElementById('formulario_editar');
    div.parentNode.removeChild(div);
};
function modificar_sede(posicion) {
    sede[posicion].setCodigo(document.getElementById('codigo1').value);
    sede[posicion].setNombre(document.getElementById('nombre1').value);
    sede[posicion].setDireccion(document.getElementById('direccion1').value);
    sede[posicion].setTitulo(document.getElementById('titulo1').value);
    console.log(sede[posicion]);
    let div = document.getElementById(ide);
    div.parentNode.removeChild(div);
    sedes();
    salir_sede();
};
function borrar_sede(posicion) {
    sede.splice(posicion, 1);
    j = 0;
    for (let i in sede) {
        if (sede[i] != sede[posicion]) {
            sede[j] = sede[i];
            j++
        }
    }
    sedes();
}





