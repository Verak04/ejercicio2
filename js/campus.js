import {Alumno} from './clases/Alumno.js';
import {Asignatura} from './clases/Asignatura.js'



function formulario_sede(){
document.getElementById('formulario').innerHTML+="<form  action=''><input type='text' placeholder='Codigo de institución.'><input type='text' placeholder='Nombre de institución.'><input type='text' placeholder='Direción.'><input type='text' placeholder='Carrera dictada.'><input type='button' value='Ingresar' id='boton'></form>"
};