class Curso{

    #titulo = "Sin titulo";
    #capitulos = [{tema:"Capitulo",duracion:0}];
    #duracion=0;

    set titulo(valor){
        this.#titulo = valor;
    }

    get titulo()
    {
        return this.#titulo;
    }

    set capitulos(valor){
        this.#capitulos = valor;
    }

    get capitulos(){
        return this.#capitulos;
    }
    
    get duracion(){

        this.#duracion = 0;
        this.#capitulos.forEach(capitulo => {
            this.#duracion = this.#duracion + capitulo.duracion;
        });

        return this.#duracion;
    }

}