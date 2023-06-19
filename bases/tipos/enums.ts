(()=>{

    /*
    * definición de un enum - sirve para definir números de forma semántica
    * por defecto los números se van tomando en conjunto con sus posiicones
    * si se asigna un numero inicial entonces sigue con el sucesor
    */

    enum ScoreValue {
        medium = 2,
        min = -10,
        max,
    }


    const maxValue:ScoreValue = ScoreValue.max;

    console.log(maxValue)
})();