class Persona {
    
    #nombre = "Sin nombre"
    #paisNacimiento = "Sin país"
    
    saludar(){
        console.log(`Hola, mi nombre es ${this.#nombre} y soy del país ${this.#paisNacimiento}.`);
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(valor){
        if(valor === "")
            console.log("El 'nombre' no puede ser vacío");
        else
            this.#nombre = valor;
    }

    get paisNacimiento(){
        return this.#paisNacimiento;
    }

    set paisNacimiento(valor){
        this.#paisNacimiento = valor;
    }
}

export default Persona;