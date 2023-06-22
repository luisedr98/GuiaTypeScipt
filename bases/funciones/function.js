"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is safe`;
    //? definición de tipo función cualquiera
    //   let myFunction:Function;
    //? definicion de acuerdo a las firmas addNumbers
    let myFunction;
    //? definicion de acuerdo a las firmas addNumbers
    // let myFunction: (a: number, b:number) => number
    //? definción de acuerdo a la firma greet
    // let myFunction: (a: string) => string
    //? defincion de acuerdo a saveTheWorld
    // let myFunction: () => void;
    //? se rompe la referencia a any
    //   myFunction = 10;
    myFunction = addNumbers;
    console.log(myFunction(2, 3));
    //   myFunction = greet;
    //   console.log( myFunction("Luis") );
    //   myFunction = saveTheWorld;
    //   console.log( myFunction() );
})();
