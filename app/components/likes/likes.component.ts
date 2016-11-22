import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';

import { PostService } from '../../services/post.service';

import { Post } from '../../models/post';

@Component({
    selector: 'likes',
    templateUrl: "./app/components/likes/likes.component.html",
    styleUrls: ["./app/components/likes/likes.component.css"]
})
export class LikesComponent {
    
    @Input() post: Post;

    constructor(
        private _postService: PostService,
        private _router: Router) { }

    updateLikes(): void {
        this.post.likes += 1;
        this._postService.updateLikes(this.post);
        this._router.navigate(['/posts', this.post.id]);
    }
}