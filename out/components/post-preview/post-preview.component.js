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
var core_1 = require('@angular/core');
var post_1 = require("../../models/post");
var PostPreviewComponent = (function () {
    function PostPreviewComponent() {
        /*------------------------------------------------------------------------------------------------------------------|
         | ~~~ Red Path ~~~                                                                                                 |
         |------------------------------------------------------------------------------------------------------------------|
         | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
         | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
         | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
         |------------------------------------------------------------------------------------------------------------------*/
        this.autorPost = new core_1.EventEmitter();
        /*------------------------------------------------------------------------------------------------------------------|
         | ~~~ Green Path ~~~                                                                                               |
         |------------------------------------------------------------------------------------------------------------------|
         | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
         | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
         | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
         |------------------------------------------------------------------------------------------------------------------*/
        this.detallePost = new core_1.EventEmitter();
    }
    PostPreviewComponent.prototype.filtrarPorAutor = function () {
        this.autorPost.emit(this.post.author.id);
    };
    PostPreviewComponent.prototype.irDetalle = function () {
        this.detallePost.emit(this.post.id);
    };
    PostPreviewComponent.prototype.plainTextToHtml = function (text) {
        return "<p>" + text.replace(/\n/gi, "</p><p>") + "</p>";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PostPreviewComponent.prototype, "post", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PostPreviewComponent.prototype, "autorPost", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PostPreviewComponent.prototype, "detallePost", void 0);
    PostPreviewComponent = __decorate([
        core_1.Component({
            selector: "post-preview",
            templateUrl: "./app/components/post-preview/post-preview.component.html",
            styleUrls: ["./app/components/post-preview/post-preview.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], PostPreviewComponent);
    return PostPreviewComponent;
}());
exports.PostPreviewComponent = PostPreviewComponent;
//# sourceMappingURL=post-preview.component.js.map