"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "optional string"}`;
    };
    const name = fullName("Luis");
    console.log(name);
})();
