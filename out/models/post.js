"use strict";
var Post = (function () {
    function Post(id, title, intro, body, media, publicationDate, categories, author, likes) {
        this.id = id;
        this.title = title;
        this.intro = intro;
        this.body = body;
        this.media = media;
        this.publicationDate = publicationDate;
        this.categories = categories;
        this.author = author;
        this.likes = likes;
    }
    Post.fromJson = function (json) {
        return new Post(json.id, json.title, json.intro, json.body, json.media, json.publicationDate, json.categories, json.author, json.likes);
    };
    Post.fromJsonToList = function (json) {
        return json.reduce(function (posts, post) {
            posts.push(Post.fromJson(post));
            return posts;
        }, []);
    };
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map