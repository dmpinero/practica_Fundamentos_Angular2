import { Inject, Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';

import { BackendUri } from "./settings.service";
import { Post } from '../models/post';
import { Category } from '../models/category';

@Injectable()
export class PostService {
    fecha_actual: number = Date.now();

    constructor(
        private _http: Http,
        @Inject(BackendUri) private _backendUri) { }

    getPosts(): Observable<Post[]> {
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
            .get(`${this._backendUri}/posts?_sort=publicationDate&_order=DESC&publicationDate_lte=${this.fecha_actual}`)
            .map((response: Response) => Post.fromJsonToList(response.json()));
                      
    }

    getUserPosts(id: number): Observable<Post[]> {

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
                   .get(`${this._backendUri}/posts?author.id=${id}&_sort=publicationDate&_order=DESC&publicationDate_lte=${this.fecha_actual}`)
                   .map((response: Response) => Post.fromJsonToList(response.json()));
    }

    getCategoryPosts(id: number): Observable<Post[]> {

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

        let posts = this._http
                   .get(`${this._backendUri}/posts?_sort=publicationDate&_order=DESC&publicationDate_lte=${this.fecha_actual}`)

        return posts.map((response: Response) => {
            let post_json = Post.fromJsonToList(response.json());
                return post_json.filter((post: Post) => {
                    return post.categories.find((category: Category) => {
                        return category.id == id;
                    })
                })
        });
    }

    getPostDetails(id: number): Observable<Post> {
        return this._http
                   .get(`${this._backendUri}/posts/${id}`)
                   .map((response: Response) => Post.fromJson(response.json()));
    }

    createPost(post: Post): Observable<Post> {

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
                   .post(`${this._backendUri}/posts`, post)
                   .map((respuesta: Response) => {
                       // Obtenemos el cuerpo de la respuesta en formato JSON.
                       let json = respuesta.json();
                       // Creamos una instancia de Post.
                       return Post.fromJson(json);
                   });
    }

   /*----------------------------------------------------------------------------------|
    | ~~~ Optional Path Broken White Path (AKA Blanco Roto) ~~~                        |                                      |
    |----------------------------------------------------------------------------------|
    | Actuaizar Post                                                                   |
    |----------------------------------------------------------------------------------*/
    private headers = new Headers({'Content-Type': 'application/json'});   
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    updatePost(post: Post): Promise<Post> {
        const url = `${this._backendUri}/posts/${post.id}`;
        return this._http
            .put(url, JSON.stringify(post), {headers: this.headers})
            .toPromise()
            .then(() => post)
            .catch(this.handleError);
    }

   /*----------------------------------------------------------------------------------|
    | ~~~ Brick Red Path (AKA Teja): ~~~                                               |
    |----------------------------------------------------------------------------------|
    | Actualizar Likes                                                                 |
    |----------------------------------------------------------------------------------*/
    updateLikes(post: Post): Promise<Post> {
            const url = `${this._backendUri}/posts/${post.id}`;
            return this._http
                .put(url, JSON.stringify(post), {headers: this.headers})
                .toPromise()
                .then(() => post)
                .catch(this.handleError);
        }

   /*----------------------------------------------------------------------------------|
    | ~~~ Red Wine Path (AKA Vino Tinto): ~~~                                          |
    |----------------------------------------------------------------------------------|
    | Buscar por el texto introducido en el input                                      |
    |----------------------------------------------------------------------------------*/   
    search(texto: string): Observable<Post[]> {
       const url = `${this._backendUri}/posts?q=${texto}`;
        return this._http
            .get(url)
            .map((response: Response) => {
                return Post.fromJsonToList(response.json()
            )});     
    }
}
