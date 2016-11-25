import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";

/*----------------------------------------------------------|
 | ~~~ Blue Path ~~~                                        |
 |----------------------------------------------------------|
 | Importa FromNowPipe para poder usarlo en este documento. |
 |----------------------------------------------------------*/

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { AutoGrowDirective } from "./directives/auto-grow.directive";
import { BackendUriProvider} from "./services/settings.service";
import { CategoryBoxComponent } from "./components/category-box/category-box.component";
import { CategoryPostsComponent } from "./components/category-posts/category-posts.component";
import { CategoryService } from "./services/category.service";
import { HeaderBarComponent } from "./components/header-bar/header-bar.component";
import { NewsComponent } from "./components/news/news.component";
import { NewStoryComponent } from "./components/new-story/new-story.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";
import { PostDetailsResolve } from "./services/post-details-resolve.service";
import { PostFormComponent } from "./components/post-form/post-form.component";
import { PostPreviewComponent } from "./components/post-preview/post-preview.component";
import { PostsListComponent } from "./components/posts-list/posts-list.component";
import { PostsResolve } from "./services/posts-resolve.service";
import { PostService } from "./services/post.service";
import { SearchBoxComponent } from "./components/search-box/search-box.component";
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UserPostsComponent } from "./components/user-posts/user-posts.component";
import { FromNowPipe } from './pipes/from-now.pipe';
import { LikesComponent } from './components/likes/likes.component';
import { SearchResolve } from './services/search-resolve.service';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],

    /*-----------------------------------------------|
     | ~~~ Blue Path ~~~                             |
     |-----------------------------------------------|
     | No olvides declarar FromNowPipe en el módulo. |
     |-----------------------------------------------*/

    declarations: [
        AppComponent,
        AutoGrowDirective,
        CategoryBoxComponent,
        CategoryPostsComponent,
        HeaderBarComponent,
        NewsComponent,
        NewStoryComponent,
        PostDetailsComponent,
        PostPreviewComponent,
        PostFormComponent,
        PostsListComponent,
        SearchBoxComponent,
        BuscadorComponent,
        UserPostsComponent,
        FromNowPipe,
        LikesComponent
    ],
    providers: [
        BackendUriProvider,
        CategoryService,
        PostDetailsResolve,
        PostService,
        PostsResolve,
        SearchResolve
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
