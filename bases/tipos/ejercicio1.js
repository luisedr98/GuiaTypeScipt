"use strict";
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
//# sourceMappingURL=ejercicio1.js.map