(()=>{

    let flash :{ name: string, age:number, powers:string[], getNombre?: () => string  } = {
        name : "Barry Allen",
        age: 24,
        powers: [
            "Super velocidad",
            "Viajar en el tiempo"
        ],
        getNombre(){
            return this.name
        }
    }

    //* si la propiedad es opcional se debe usar el ? para que no se interrumpa la ejecución
    console.log(flash.getNombre?.())
    
})();