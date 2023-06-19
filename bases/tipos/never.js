"use strict";
(() => {
    const error = (message, flat = false) => {
        if (flat) {
            throw new Error(message);
        }
        return true;
    };
    console.log(error("Exist and error", true));
})();
