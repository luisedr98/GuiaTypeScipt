"use strict";
(() => {
    var _a;
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [
            1, 2
        ],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: "Eduard Huston",
        age: 24,
        powers: [
            1, 2
        ],
    };
    console.log(((_a = superman.getName) === null || _a === void 0 ? void 0 : _a.call(superman)) || "No existe el método");
})();
//# sourceMappingURL=types.js.map