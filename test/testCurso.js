import Curso from "../clases/curso.js";
import CursoLN from "../logica/CursoLN.js";
import Estudiante from "../clases/estudiante.js";
import Inscripcion from "../logica/inscripcion.js";

let objCurso = new Curso();
objCurso.id = 1;
objCurso.titulo = "Javascript básico";
objCurso.capitulos.push({tema:"Introducción",duracion:10});
objCurso.capitulos.push({tema:"Variables y constantes",duracion:20});
objCurso.capitulos.push({tema:"Bucles",duracion:15});

if(objCurso.duracion === 45)
    console.log("EXITOSO");
else
    console.log("FALLIDO");

//let lnCurso = new CursoLN();
CursoLN.guardarCurso(objCurso);

objCurso = new Curso();
objCurso.id = 2;
objCurso.titulo = "Programación Orientada Objetos";
objCurso.capitulos.push({tema:"Bienvenida",duracion:5});
objCurso.capitulos.push({tema:"Clases",duracion:15});
objCurso.capitulos.push({tema:"Herencia",duracion:20});
objCurso.capitulos.push({tema:"Getters and Setters",duracion:10});

if(objCurso.duracion === 50)
    console.log("EXITOSO");
else
    console.log("FALLIDO");

//let lnCurso = new CursoLN();
CursoLN.guardarCurso(objCurso);


console.log("TOTAL CURSOS = ",Curso.listadoCursos.length);

console.log(" CURSO de ID 2 = ",CursoLN.buscarPorID(2).titulo);

const objEstudiante = new Estudiante("Pablo Herrera","Ecuador", "Universidad ABC", "Quinto");
objEstudiante.saludar();
objEstudiante.mostrarEstudiante();

Inscripcion.inscribirEstudiante(2,objEstudiante);