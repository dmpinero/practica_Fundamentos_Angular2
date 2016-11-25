import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { Post } from "../models/post";
import { PostService } from "./post.service";

@Injectable()
export class SearchResolve implements Resolve<Post[]> {
    
    constructor(private _postService: PostService) { }
   
    resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
        let texto = route.params['texto'];
        return this._postService.search(`${texto}`);
    }
}