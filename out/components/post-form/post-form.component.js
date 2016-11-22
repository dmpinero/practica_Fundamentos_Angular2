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
var post_1 = require("../../models/post");
var user_1 = require("../../models/user");
var PostFormComponent = (function () {
    function PostFormComponent() {
        this.publicationDateScheduled = false;
        this.postSubmitted = new core_1.EventEmitter();
        this.postSubmittedUpdated = new core_1.EventEmitter();
    }
    PostFormComponent.prototype.ngOnInit = function () {
        this.nowDatetimeLocal = this._formatDateToDatetimeLocal(new Date());
        if (this.post) {
            this.texto = "Actualizar";
        }
        else {
            this.texto = "Publicar";
        }
    };
    PostFormComponent.prototype._formatDateToDatetimeLocal = function (date) {
        return ("\n            " + this._fixPad(date.getFullYear(), 4) + "-\n            " + this._fixPad(date.getMonth() + 1, 2) + "-\n            " + this._fixPad(date.getDate(), 2) + "T\n            " + this._fixPad(date.getHours(), 2) + ":\n            " + this._fixPad(date.getMinutes(), 2)).replace(/\n/gi, "").replace(/ /gi, "");
    };
    PostFormComponent.prototype._fixPad = function (datePart, length) {
        return ("0000" + datePart).slice(-length);
    };
    PostFormComponent.prototype._getPostPublicationDate = function (formPublicationDate) {
        var publicationDate;
        if (this.publicationDateScheduled) {
            publicationDate = new Date(formPublicationDate);
            if (isNaN(publicationDate.getTime())) {
                publicationDate = new Date();
            }
        }
        else {
            publicationDate = new Date();
        }
        return publicationDate.getTime();
    };
    PostFormComponent.prototype.setScheduling = function (schedule) {
        this.publicationDateScheduled = schedule;
    };
    PostFormComponent.prototype.submitPost = function (form) {
        /*-------------------------------------------------------------------------------------------------------------|
         | ~~~ Purple Path ~~~                                                                                         |
         |-------------------------------------------------------------------------------------------------------------|
         | Aquí no tienes que hacer nada más allá de comprobar que los datos del formulario se recogen correctamente y |
         | tienen 'forma' de Post. Si no es así, al hacer 'Post.fromJson()' se instanciará un post que no se parece en |
         | nada a lo indicado en el formulario. Por tanto, pon especial atención a que los nombres indicados en los    |
         | distintos elementos del formulario se correspondan con las propiedades de la clase Post.                    |
         |-------------------------------------------------------------------------------------------------------------*/
        var post = post_1.Post.fromJson(form.value);
        if (this.texto === 'Publicar') {
            post.likes = 0;
            post.author = user_1.User.defaultUser();
            post.publicationDate = this._getPostPublicationDate(form.value.publicationDate);
            post.media = "";
            post.categories = [];
            this.postSubmitted.emit(post);
        }
        else {
            this.postSubmittedUpdated.emit(post);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PostFormComponent.prototype, "post", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PostFormComponent.prototype, "postSubmitted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PostFormComponent.prototype, "postSubmittedUpdated", void 0);
    PostFormComponent = __decorate([
        core_1.Component({
            selector: "post-form",
            templateUrl: "./app/components/post-form/post-form.component.html",
            styleUrls: ["./app/components/post-form/post-form.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], PostFormComponent);
    return PostFormComponent;
}());
exports.PostFormComponent = PostFormComponent;
//# sourceMappingURL=post-form.component.js.map