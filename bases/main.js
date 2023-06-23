"use strict";
(() => {
    const msg = "Hello world!";
    console.log(msg);
})();
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
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "optional string"}`;
    };
    const name = fullName("Luis");
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Luis", "Dominguez");
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...argRest) => {
        return `${firstName} ${argRest.join(" ")}`;
    };
    const name = fullName("Luis", "Dominguez", "Ruiz");
    console.log(name);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is safe`;
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(2, 3));
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => "Batiseñar activada!";
    const nameHero = returnName();
    console.log({ nameHero });
});
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    var _a;
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [
            "Super velocidad",
            "Viajar en el tiempo"
        ],
        getNombre() {
            return this.name;
        }
    };
    console.log((_a = flash.getNombre) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
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
(() => {
    let myCustomVariable;
    myCustomVariable = "Luis";
    console.log(myCustomVariable);
    myCustomVariable = 2;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: "Eduardo",
        age: 24,
        powers: [1]
    };
    console.log(myCustomVariable);
})();
(() => {
    let avenger = "123";
    const pos = avenger.charAt(2);
    console.log(pos);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
    numbers.forEach(number => console.log(number));
    let villans = ["Iron man", "Batman", "Spiderman"];
    villans = villans.map(v => v.concat(" super"));
    console.log(villans);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman);
    console.log(isSuperman);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let FuerzaHeroes;
    (function (FuerzaHeroes) {
        FuerzaHeroes[FuerzaHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        FuerzaHeroes[FuerzaHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        FuerzaHeroes[FuerzaHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        FuerzaHeroes[FuerzaHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(FuerzaHeroes || (FuerzaHeroes = {}));
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    let ScoreValue;
    (function (ScoreValue) {
        ScoreValue[ScoreValue["medium"] = 2] = "medium";
        ScoreValue[ScoreValue["min"] = -10] = "min";
        ScoreValue[ScoreValue["max"] = -9] = "max";
    })(ScoreValue || (ScoreValue = {}));
    const maxValue = ScoreValue.max;
    console.log(maxValue);
})();
(() => {
    const error = (message, flat = false) => {
        if (flat) {
            throw new Error(message);
        }
        return true;
    };
    console.log(error("Exist and error", true));
})();
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers > villians)
        console.log("Estamos salvados");
    else
        console.log("Estamos en problemas");
    avengers = Number("2A2");
    console.log({ avengers });
})();
(() => {
    const myName = "Hola";
    console.log({ myName });
})();
(() => {
    const hero = ["Hero1", true, 1];
    hero[2] = 3;
    console.log(hero);
})();
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
//# sourceMappingURL=main.js.map