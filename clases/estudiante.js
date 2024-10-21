import Persona from "./persona.js";

class Estudiante extends Persona {
    constructor(nombre,paisNacimiento,universidad,semestre)
    {
        super(nombre,paisNacimiento);
        this.universidad = universidad;
        this.semestre = semestre;
    }

    mostrarEstudiante()
    {
        console.log(`Estudio en ${this.universidad} estoy en ${this.semestre} semestre.`);
    }
}

export default Estudiante;