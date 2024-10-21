import Persona from "../clases/persona.js";
import Estudiante from "../clases/estudiante.js";
import Empleado from "../clases/empleado.js";

let objPersona = new Persona("Pablo","Ecuador");
objPersona.saludar();

objPersona = new Persona("Leonel","Argentina");
objPersona.saludar();

let objEmpleado = new Empleado("Leonel","Ecuador","Banco Xyz","Ing. de Pruebas",8);
objEmpleado.saludar();
objEmpleado.mostrarTrabajo();

let objEstudiante = new Estudiante("Juan","Brazil","ABCD","Quinto");
objEstudiante.saludar();
objEstudiante.mostrarEstudiante();