"use strict";
(() => {
    function myFunction() {
        return;
    }
    const myFunction2 = () => {
        return;
    };
    const a = myFunction();
    const b = myFunction2();
    console.log({ a, b });
})();
