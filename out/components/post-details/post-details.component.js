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
var router_1 = require("@angular/router");
var post_service_1 = require('../../services/post.service');
var PostDetailsComponent = (function () {
    function PostDetailsComponent(_activatedRoute, _router, _postService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._postService = _postService;
        /*---------------------------------------------------------------------------------------------------------------|
         | ~~~ Optional Path Broken White Path (AKA Blanco Roto)  ~~~                                                                                              |
         |---------------------------------------------------------------------------------------------------------------|
         | Editar controla el modo en el que se está                                                                     |
         |---------------------------------------------------------------------------------------------------------------*/
        this.modo = 'consulta';
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.data.forEach(function (data) { return _this.post = data.post; });
        window.scrollTo(0, 0);
    };
    PostDetailsComponent.prototype.plainTextToHtml = function (text) {
        return "<p>" + text.replace(/\n/gi, "</p><p>") + "</p>";
    };
    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts del autor indicado. Recuerda que    |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/users', |
     | pasando como parámetro el identificador del autor.                                                            |
     |---------------------------------------------------------------------------------------------------------------*/
    PostDetailsComponent.prototype.filtrarPorAutor = function () {
        this._router.navigate(['/posts/users', this.post.author.id]);
    };
    /*--------------------------------------------------------------------------------------------------------------------|
     | ~~~ Yellow Path ~~~                                                                                                |
     |--------------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts de la categoría indicada. Recuerda que   |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/categories', |
     | pasando como parámetro el identificador de la categoría.                                                           |
     |--------------------------------------------------------------------------------------------------------------------*/
    PostDetailsComponent.prototype.filtrarPorCategoria = function (id) {
        this._router.navigate(['posts/categories', id]);
    };
    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Optional Path Broken White Path (AKA Blanco Roto)  ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Cambiar modo al pusar en el botón Editar post                                                                 |
     |---------------------------------------------------------------------------------------------------------------*/
    PostDetailsComponent.prototype.switchMode = function () {
        if (this.modo === 'editar') {
            this.modo = 'consulta';
        }
        else {
            this.modo = 'editar';
        }
    };
    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Optional Path Broken White Path (AKA Blanco Roto)  ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Actualizar post                                                                 |
     |---------------------------------------------------------------------------------------------------------------*/
    PostDetailsComponent.prototype.updatePost = function () {
        var _this = this;
        this._postService.updatePost(this.post)
            .then(function () {
            _this._router.navigate(['/']);
        });
    };
    PostDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/components/post-details/post-details.component.html",
            styleUrls: ["./app/components/post-details/post-details.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, post_service_1.PostService])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());
exports.PostDetailsComponent = PostDetailsComponent;
//# sourceMappingURL=post-details.component.js.map