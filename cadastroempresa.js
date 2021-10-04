"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modeloempresa = void 0;
var uuid_1 = require("uuid");
var modeloempresa = /** @class */ (function () {
    function modeloempresa() {
        this.id = (0, uuid_1.v4)();
    }
    return modeloempresa;
}());
exports.modeloempresa = modeloempresa;
;