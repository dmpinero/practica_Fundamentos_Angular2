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
var CategoryBoxComponent = (function () {
    function CategoryBoxComponent() {
        /*-------------------------------------------------------------------------------------------------------------------|
         | ~~~ Yellow Path ~~~                                                                                               |
         |-------------------------------------------------------------------------------------------------------------------|
         | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión  |
         | de eventos; la idea es enviar al componente padre la categoría sobre el cuál se ha hecho clic. Y puesto que dicho |
         | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                 |
         |-------------------------------------------------------------------------------------------------------------------*/
        this.categoriaPosts = new core_1.EventEmitter();
    }
    CategoryBoxComponent.prototype.filtrarPorCategoria = function (id) {
        this.categoriaPosts.emit(id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CategoryBoxComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CategoryBoxComponent.prototype, "categoriaPosts", void 0);
    CategoryBoxComponent = __decorate([
        core_1.Component({
            selector: "category-box",
            templateUrl: "./app/components/category-box/category-box.component.html",
            styleUrls: ["./app/components/category-box/category-box.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryBoxComponent);
    return CategoryBoxComponent;
}());
exports.CategoryBoxComponent = CategoryBoxComponent;
//# sourceMappingURL=category-box.component.js.map