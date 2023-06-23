"use strict";
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
//# sourceMappingURL=enums.js.map