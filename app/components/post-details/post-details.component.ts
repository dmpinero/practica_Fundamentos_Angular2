import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute} from "@angular/router";

import { FormGroup } from "@angular/forms";

import { Post } from "../../models/post";
import { PostService } from '../../services/post.service';


@Component({
    templateUrl: "./app/components/post-details/post-details.component.html",
    styleUrls: ["./app/components/post-details/post-details.component.css"]
})
export class PostDetailsComponent implements OnInit {

    post: Post;
    constructor(private _activatedRoute: ActivatedRoute, 
                private _router: Router, 
                private _postService: PostService) { }

    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Optional Path Broken White Path (AKA Blanco Roto)  ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Editar controla el modo en el que se está                                                                     |
     |---------------------------------------------------------------------------------------------------------------*/
    modo:string =  'consulta';
    
    ngOnInit(): void {
        this._activatedRoute.data.forEach((data: { post: Post}) => this.post = data.post);
        window.scrollTo(0, 0);
    }

    plainTextToHtml(text: string): string {
        return `<p>${text.replace(/\n/gi, "</p><p>")}</p>`;
    }

    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts del autor indicado. Recuerda que    |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/users', |
     | pasando como parámetro el identificador del autor.                                                            |
     |---------------------------------------------------------------------------------------------------------------*/
    filtrarPorAutor(): void {
        this._router.navigate(['/posts/users', this.post.author.id]);
    }

    /*--------------------------------------------------------------------------------------------------------------------|
     | ~~~ Yellow Path ~~~                                                                                                |
     |--------------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts de la categoría indicada. Recuerda que   |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/categories', |
     | pasando como parámetro el identificador de la categoría.                                                           |
     |--------------------------------------------------------------------------------------------------------------------*/
     filtrarPorCategoria(id: number): void {
         this._router.navigate(['posts/categories', id]);
     }

    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Optional Path Broken White Path (AKA Blanco Roto)  ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Cambiar modo al pusar en el botón Editar post                                                                 |
     |---------------------------------------------------------------------------------------------------------------*/
     switchMode(): void {
         if (this.modo === 'editar')
         {
             this.modo = 'consulta';
         }
         else {
             this.modo = 'editar';
         }
     }

    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Optional Path Broken White Path (AKA Blanco Roto)  ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Actualizar post                                                                 |
     |---------------------------------------------------------------------------------------------------------------*/
    updatePost(): void {
        this._postService.updatePost(this.post)
            .then(() => {
                this._router.navigate(['/'])
            });
    }     
}
