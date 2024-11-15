import Curso from "../clases/curso.js";

class CursoLN{

    /**
     * Método que permite guardar un curso
     * @param {Curso} objCurso Curso que deseo guardar
     */
    static guardarCurso(objCurso)
    {        
        Curso.listadoCursos.push(objCurso);
        console.log(`El curso ${objCurso.titulo} ha sido guardado con éxito.`);
        console.log(`Tiene ${objCurso.capitulos.length} Capítulos.`);
        console.log(`Duración Total del Curso =  ${objCurso.duracion} minutos.`);
    }

    /**
     *ID del curso
     * @param {number} id 
     */
    static buscarPorID(id){
        const cursos = Curso.listadoCursos;
        const curso = cursos.find((objCurso) => objCurso.id === id);
        return curso;
    }

}
export default CursoLN;