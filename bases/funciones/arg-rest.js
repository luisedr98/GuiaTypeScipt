"use strict";
(() => {
    const fullName = (firstName, ...argRest) => {
        return `${firstName} ${argRest.join(" ")}`;
    };
    const name = fullName("Luis", "Dominguez", "Ruiz");
    console.log(name);
})();
