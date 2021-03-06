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
var post_service_1 = require("./post.service");
var PostsResolve = (function () {
    function PostsResolve(_postService) {
        this._postService = _postService;
    }
    PostsResolve.prototype.resolve = function (route) {
        /*-----------------------------------------------------------------------------------------|
         | ~~~ Red Path ~~~                                                                        |
         |-----------------------------------------------------------------------------------------|
         | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
         | a un usuario, llame a la función 'getUserPosts()' del servicio PostService. Recuerda    |
         | mirar en los parámetros de la ruta, a ver qué encuentras.                               |
         |-----------------------------------------------------------------------------------------*/
        var userId = route.params['userId'];
        if (userId != undefined) {
            return this._postService.getUserPosts(userId);
        }
        /*-----------------------------------------------------------------------------------------|
         | ~~~ Yellow Path ~~~                                                                     |
         |-----------------------------------------------------------------------------------------|
         | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
         | a una categoría, llame a la función 'getCategoryPosts()' del servicio PostService.      |
         | Recuerda mirar en los parámetros de la ruta, a ver qué encuentras.                      |
         |-----------------------------------------------------------------------------------------*/
        var categoryId = route.params['categoryId'];
        if (categoryId != undefined) {
            return this._postService.getCategoryPosts(categoryId);
        }
        return this._postService.getPosts();
    };
    PostsResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostsResolve);
    return PostsResolve;
}());
exports.PostsResolve = PostsResolve;
//# sourceMappingURL=posts-resolve.service.js.map