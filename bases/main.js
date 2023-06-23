"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2],
        getName() {
            return this.name;
        },
    };
    let superman = {
        name: "Eduard Huston",
        age: 24,
        powers: [1, 2],
    };
})();
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return `${this.name}`;
        }
    }
})();
(() => {
    const client = {
        age: 25,
        name: "Luis",
        address: {
            city: "Santo Domingo",
            zipCode: "108797",
        },
        getFullAdress: (id) => {
            return `this is my id ${id}`;
        },
    };
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    },
};
const guason = {
    reir: true,
    comer: true,
    llorar: false,
};
const reir = (guason) => {
    if (guason === null || guason === void 0 ? void 0 : guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() { }
}
(() => {
    let addTwoNumbersFunction;
    addTwoNumbersFunction = (a, b) => a + b;
})();
//# sourceMappingURL=main.js.map