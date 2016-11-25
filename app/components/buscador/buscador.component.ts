import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from "rxjs/Subscription";

import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';


@Component({
    selector: "buscador-resultado",
    templateUrl: "./app/components/buscador/buscador.component.html"
})

export class BuscadorComponent implements OnInit {
    posts: Post[];
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {        
        this._activatedRoute.data.forEach((data: { posts: Post[] }) => this.posts = data.posts);
    }

     filtrarPostAutor(id: number) {
         this._router.navigate(['/posts/users', id]);
     }

    navegarPost(id: number): void {
        this._router.navigate(['/posts', id]);
    }    
}