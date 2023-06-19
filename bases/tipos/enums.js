"use strict";
(() => {
    /*
    * definición de un enum - sirve para definir números de forma semántica
    * por defecto los números se van tomando en conjunto con sus posiicones
    * si se asigna un numero inicial entonces sigue con el sucesor
    */
    let ScoreValue;
    (function (ScoreValue) {
        ScoreValue[ScoreValue["medium"] = 2] = "medium";
        ScoreValue[ScoreValue["min"] = -10] = "min";
        ScoreValue[ScoreValue["max"] = -9] = "max";
    })(ScoreValue || (ScoreValue = {}));
    const maxValue = ScoreValue.max;
    console.log(maxValue);
})();
