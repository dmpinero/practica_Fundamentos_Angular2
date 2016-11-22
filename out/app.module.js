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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
/*----------------------------------------------------------|
 | ~~~ Blue Path ~~~                                        |
 |----------------------------------------------------------|
 | Importa FromNowPipe para poder usarlo en este documento. |
 |----------------------------------------------------------*/
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var auto_grow_directive_1 = require("./directives/auto-grow.directive");
var settings_service_1 = require("./services/settings.service");
var category_box_component_1 = require("./components/category-box/category-box.component");
var category_posts_component_1 = require("./components/category-posts/category-posts.component");
var category_service_1 = require("./services/category.service");
var header_bar_component_1 = require("./components/header-bar/header-bar.component");
var news_component_1 = require("./components/news/news.component");
var new_story_component_1 = require("./components/new-story/new-story.component");
var post_details_component_1 = require("./components/post-details/post-details.component");
var post_details_resolve_service_1 = require("./services/post-details-resolve.service");
var post_form_component_1 = require("./components/post-form/post-form.component");
var post_preview_component_1 = require("./components/post-preview/post-preview.component");
var posts_list_component_1 = require("./components/posts-list/posts-list.component");
var posts_resolve_service_1 = require("./services/posts-resolve.service");
var post_service_1 = require("./services/post.service");
var search_box_component_1 = require("./components/search-box/search-box.component");
var user_posts_component_1 = require("./components/user-posts/user-posts.component");
var from_now_pipe_1 = require('./pipes/from-now.pipe');
var likes_component_1 = require('./components/likes/likes.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_routing_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            /*-----------------------------------------------|
             | ~~~ Blue Path ~~~                             |
             |-----------------------------------------------|
             | No olvides declarar FromNowPipe en el módulo. |
             |-----------------------------------------------*/
            declarations: [
                app_component_1.AppComponent,
                auto_grow_directive_1.AutoGrowDirective,
                category_box_component_1.CategoryBoxComponent,
                category_posts_component_1.CategoryPostsComponent,
                header_bar_component_1.HeaderBarComponent,
                news_component_1.NewsComponent,
                new_story_component_1.NewStoryComponent,
                post_details_component_1.PostDetailsComponent,
                post_preview_component_1.PostPreviewComponent,
                post_form_component_1.PostFormComponent,
                posts_list_component_1.PostsListComponent,
                search_box_component_1.SearchBoxComponent,
                user_posts_component_1.UserPostsComponent,
                from_now_pipe_1.FromNowPipe,
                likes_component_1.LikesComponent
            ],
            providers: [
                settings_service_1.BackendUriProvider,
                category_service_1.CategoryService,
                post_details_resolve_service_1.PostDetailsResolve,
                post_service_1.PostService,
                posts_resolve_service_1.PostsResolve,
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map