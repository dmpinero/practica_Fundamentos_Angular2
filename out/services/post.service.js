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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var settings_service_1 = require("./settings.service");
var post_1 = require('../models/post');
var PostService = (function () {
    function PostService(_http, _backendUri) {
        this._http = _http;
        this._backendUri = _backendUri;
        this.fecha_actual = Date.now();
    }
    PostService.prototype.getPosts = function () {
        /*----------------------------------------------------------------------------------------------|
         | ~~~ Pink Path ~~~                                                                             |
         |----------------------------------------------------------------------------------------------|
         | Pide al servidor que te retorne los posts ordenados de más reciente a menos, teniendo en     |
         | cuenta su fecha de publicación. Filtra también aquellos que aún no están publicados, pues no |
         | deberían mostrarse al usuario.                                                               |
         |                                                                                              |
         | En la documentación de 'JSON Server' tienes detallado cómo hacer el filtrado y ordenación de |
         | los datos en tus peticiones, pero te ayudo igualmente. La querystring debe tener estos       |
         | parámetros:                                                                                  |
         |                                                                                              |
         |   - Filtro por fecha de publicación: publicationDate_lte=x (siendo x la fecha actual)        |
         |   - Ordenación: _sort=publicationDate&_order=DESC                                            |
         |----------------------------------------------------------------------------------------------*/
        return this._http
            .get(this._backendUri + "/posts?_sort=publicationDate&_order=DESC&publicationDate_lte=" + this.fecha_actual)
            .map(function (response) { return post_1.Post.fromJsonToList(response.json()); });
    };
    PostService.prototype.getUserPosts = function (id) {
        /*----------------------------------------------------------------------------------------------|
         | ~~~ Red Path ~~~                                                                             |
         |----------------------------------------------------------------------------------------------|
         | Ahora mismo, esta función está obteniendo todos los posts existentes, y solo debería obtener |
         | aquellos correspondientes al autor indicado. Añade los parámetros de búsqueda oportunos para |
         | que retorne solo los posts que buscamos. Ten en cuenta que, además, deben estar ordenados    |
         | por fecha de publicación descendente y obtener solo aquellos que estén publicados.           |
         |                                                                                              |
         | En la documentación de 'JSON Server' tienes detallado cómo hacer el filtrado y ordenación de |
         | los datos en tus peticiones, pero te ayudo igualmente. La querystring debe tener estos       |
         | parámetros:                                                                                  |
         |                                                                                              |
         |   - Filtro por autor: author.id=x (siendo x el identificador del autor)                      |
         |   - Filtro por fecha de publicación: publicationDate_lte=x (siendo x la fecha actual)        |
         |   - Ordenación: _sort=publicationDate&_order=DESC                                            |
         |----------------------------------------------------------------------------------------------*/
        return this._http
            .get(this._backendUri + "/posts?author.id=" + id + "&_sort=publicationDate&_order=DESC&publicationDate_lte=" + this.fecha_actual)
            .map(function (response) { return post_1.Post.fromJsonToList(response.json()); });
    };
    PostService.prototype.getCategoryPosts = function (id) {
        /*--------------------------------------------------------------------------------------------------|
         | ~~~ Yellow Path ~~~                                                                              |
         |--------------------------------------------------------------------------------------------------|
         | Ahora mismo, esta función está obteniendo todos los posts existentes, y solo debería obtener     |
         | aquellos correspondientes a la categoría indicada. Añade los parámetros de búsqueda oportunos    |
         | para que retorne solo los posts que buscamos. Ten en cuenta que, además, deben estar ordenados   |
         | por fecha de publicación descendente y obtener solo aquellos que estén publicados.               |
         |                                                                                                  |
         | Este Path tiene un extra de dificultad: un objeto Post tiene una colección de objetos Categoria, |
         | y 'JSON Server' no permite filtrado en colecciones anidadas. Por tanto, te toca a ti darle una   |
         | solución a este marrón. Una posibilidad sería aprovechar el operador 'map' de los observables.   |
         | Sirven para transformar flujos de datos y, de alguna forma, es lo que vamos buscando. Podríamos  |
         | obtener todos los posts y luego filtrarlos por categoría en 'map'. Ahí te lo dejo.               |
         |                                                                                                  |
         | En la documentación de 'JSON Server' tienes detallado cómo hacer el filtrado y ordenación de los |
         | datos en tus peticiones, pero te ayudo igualmente. La querystring debe tener estos parámetros:   |
         |                                                                                                  |
         |   - Filtro por fecha de publicación: publicationDate_lte=x (siendo x la fecha actual)            |
         |   - Ordenación: _sort=publicationDate&_order=DESC                                                |
         |--------------------------------------------------------------------------------------------------*/
        var posts = this._http
            .get(this._backendUri + "/posts?_sort=publicationDate&_order=DESC&publicationDate_lte=" + this.fecha_actual);
        return posts.map(function (response) {
            var post_json = post_1.Post.fromJsonToList(response.json());
            return post_json.filter(function (post) {
                return post.categories.find(function (category) {
                    return category.id == id;
                });
            });
        });
    };
    PostService.prototype.getPostDetails = function (id) {
        return this._http
            .get(this._backendUri + "/posts/" + id)
            .map(function (response) { return post_1.Post.fromJson(response.json()); });
    };
    PostService.prototype.createPost = function (post) {
        /*----------------------------------------------------------------------------------|
         | ~~~ Purple Path ~~~                                                              |
         |----------------------------------------------------------------------------------|
         | Utiliza el cliente HTTP para guardar en servidor el post indicado. La ruta sobre |
         | la cual tienes que hacer la petición POST es '/posts'. Recuerda que siempre que  |
         | se crea una entidad en servidor es una buena práctica retornar la misma con los  |
         | datos actualizados obtenidos tras la inserción; puedes usar la función estática  |
         | 'fromJson() para crar un nuevo objeto Post basado en la respuesta HTTP obtenida. |
         |----------------------------------------------------------------------------------*/
        return this._http
            .post(this._backendUri + "/posts", post)
            .map(function (respuesta) {
            // Obtenemos el cuerpo de la respuesta en formato JSON.
            var json = respuesta.json();
            // Creamos una instancia de Post.
            return post_1.Post.fromJson(json);
        });
    };
    PostService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(settings_service_1.BackendUri)), 
        __metadata('design:paramtypes', [http_1.Http, Object])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map