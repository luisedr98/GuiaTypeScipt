"use strict";
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers > villians)
        console.log("Estamos salvados");
    else
        console.log("Estamos en problemas");
    // TODO: se muestra un error en la creación de los números 
    avengers = Number("2A2");
    console.log({ avengers });
})();
