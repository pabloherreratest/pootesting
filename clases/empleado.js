import Persona from "./persona.js";

class Empleado extends Persona {
    constructor(nombre,paisNacimiento,empresa,profesion,aniosTrabajo)
    {
        super(nombre,paisNacimiento);
        this.empresa = empresa;
        this.profesion = profesion;
        this.aniosTrabajo = aniosTrabajo;
    }

    mostrarTrabajo()
    {
        console.log(`Trabajo en ${this.empresa} soy ${this.profesion} y tengo experiencia de ${this.aniosTrabajo} años.`);
    }
}

export default Empleado;