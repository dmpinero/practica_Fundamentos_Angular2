import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from "../../models/post";

@Component({
    selector: "post-preview",
    templateUrl: "./app/components/post-preview/post-preview.component.html",
    styleUrls: ["./app/components/post-preview/post-preview.component.css"]
})
export class PostPreviewComponent {

    @Input() post: Post;
    
    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                                 |
     |------------------------------------------------------------------------------------------------------------------|
     | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
     | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
     | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
     |------------------------------------------------------------------------------------------------------------------*/
     @Output() autorPost: EventEmitter <number> = new EventEmitter();
     filtrarPorAutor(): void {
        this.autorPost.emit(this.post.author.id);
     }
    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Green Path ~~~                                                                                               |
     |------------------------------------------------------------------------------------------------------------------|
     | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
     | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
     | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
     |------------------------------------------------------------------------------------------------------------------*/

    @Output() detallePost: EventEmitter <number> = new EventEmitter();
    irDetalle(): void {
        this.detallePost.emit(this.post.id);
    }

    plainTextToHtml(text: string): string {
        return `<p>${text.replace(/\n/gi, "</p><p>")}</p>`;
    }

}
