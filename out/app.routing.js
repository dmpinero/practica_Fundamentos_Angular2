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
var router_1 = require("@angular/router");
var category_posts_component_1 = require("./components/category-posts/category-posts.component");
var news_component_1 = require("./components/news/news.component");
var new_story_component_1 = require("./components/new-story/new-story.component");
var post_details_component_1 = require("./components/post-details/post-details.component");
var user_posts_component_1 = require("./components/user-posts/user-posts.component");
var post_details_resolve_service_1 = require("./services/post-details-resolve.service");
var posts_resolve_service_1 = require("./services/posts-resolve.service");
var buscador_component_1 = require('./components/buscador/buscador.component');
var search_resolve_service_1 = require('./services/search-resolve.service');
var routes = [
    {
        path: "posts",
        component: news_component_1.NewsComponent,
        resolve: {
            posts: posts_resolve_service_1.PostsResolve
        }
    },
    {
        path: "posts/users/:userId",
        component: user_posts_component_1.UserPostsComponent,
        resolve: {
            posts: posts_resolve_service_1.PostsResolve
        }
    },
    {
        path: "posts/categories/:categoryId",
        component: category_posts_component_1.CategoryPostsComponent,
        resolve: {
            posts: posts_resolve_service_1.PostsResolve
        }
    },
    {
        path: "new-story",
        component: new_story_component_1.NewStoryComponent
    },
    {
        path: "posts/:postId",
        component: post_details_component_1.PostDetailsComponent,
        resolve: {
            post: post_details_resolve_service_1.PostDetailsResolve
        }
    },
    {
        path: "searchResults/:texto",
        component: buscador_component_1.BuscadorComponent,
        resolve: {
            posts: search_resolve_service_1.SearchResolve
        }
    },
    {
        path: "**",
        redirectTo: "/posts"
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map