"use strict";
(() => {
    const fullName = (firstName, lastName, uppercase = true) => {
        if (uppercase)
            return `${firstName} ${lastName || "optional string"}`.toUpperCase();
        else
            return `${firstName} ${lastName || "optional string"}`.toLowerCase();
    };
    const name = fullName("Luis", "Dominguez", false);
    console.log(name);
})();
//# sourceMappingURL=arg-defaults.js.map