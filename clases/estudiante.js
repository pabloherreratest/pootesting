import Persona from "./persona.js";

class Estudiante extends Persona {
    constructor(nombre,paisNacimiento,universidad,semestre)
    {
        super();
        this.nombre = nombre;
        this.paisNacimiento = paisNacimiento;
        this.universidad = universidad;
        this.semestre = semestre;
    }

    mostrarEstudiante()
    {
        console.log(`Estudio en ${this.universidad} estoy en ${this.semestre} semestre.`);
    }
}

export default Estudiante;