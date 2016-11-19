"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var moment = require("moment");
require("moment/locale/es");
/*---------------------------------------------------------------------------------------------------------|
 | ~~~ Blue Path ~~~                                                                                       |
 |---------------------------------------------------------------------------------------------------------|
 | Crea el pipe FromNowPipe. Su cometido es, partiendo de una fecha dada, retornar una cadena de texto     |
 | que exprese el tiempo que ha pasado desde dicha fecha hasta ahora. Por ejemplo: hace 2 horas. Para esta |
 | tarea nos apoyamos en la librería Moment.js; ya tienes hecho el import correspondiente, solo tienes que |
 | usarla donde proceda. Haciendo 'moment(fecha).fromNow()' obtenemos justo lo que necesitamos.            |
 |---------------------------------------------------------------------------------------------------------*/
var FromNowPipe = (function () {
    function FromNowPipe() {
    }
    FromNowPipe.prototype.transform = function (fecha) {
        return moment(fecha).fromNow();
    };
    FromNowPipe = __decorate([
        core_1.Pipe({ name: "FromNow" }), 
        __metadata('design:paramtypes', [])
    ], FromNowPipe);
    return FromNowPipe;
}());
exports.FromNowPipe = FromNowPipe;
//# sourceMappingURL=from-now.pipe.js.map