import { Component } from "@angular/core";
/*Red Wine Path (AKA Vino Tinto)*/
import { Router } from "@angular/router";

import { Observable }        from 'rxjs/Observable';
import { PostService } from '../../services/post.service';
/*Red Wine Path (AKA Vino Tinto)*/

import { Post } from '../../models/post';

@Component({
    selector: "header-bar",
    templateUrl: "./app/components/header-bar/header-bar.component.html",
    styleUrls: ["./app/components/header-bar/header-bar.component.css"]
})
export class HeaderBarComponent { 

   /* Red Wine Path (AKA Vino Tinto) */
   constructor(private _router: Router) { }

    buscar(texto:string): void {
        this._router.navigate(['/searchResults', texto]);
    }
    /* Red Wine Path (AKA Vino Tinto) */
}
