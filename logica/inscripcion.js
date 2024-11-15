import CursoLN from "./CursoLN.js";

class Inscripcion 
{

    static inscribirEstudiante(idCurso,objEstudiante)
    {
        const curso= CursoLN.buscarPorID(idCurso);

        console.log(`El estudiante ${objEstudiante.nombre} se ha inscrito en el cursos ${curso.titulo}.`)

    }

}

export default Inscripcion;