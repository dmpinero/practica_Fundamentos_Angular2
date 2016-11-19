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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var settings_service_1 = require("./settings.service");
var category_1 = require("../models/category");
var CategoryService = (function () {
    function CategoryService(_http, _backendUri) {
        this._http = _http;
        this._backendUri = _backendUri;
    }
    CategoryService.prototype.getCategories = function () {
        return this._http
            .get(this._backendUri + "/categories")
            .map(function (response) { return category_1.Category.fromJsonToList(response.json()); });
    };
    CategoryService.prototype.createCategory = function (category) {
        return this._http
            .post(this._backendUri + "/categories", category)
            .map(function (response) { return category_1.Category.fromJson(response.json); });
    };
    CategoryService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(settings_service_1.BackendUri)), 
        __metadata('design:paramtypes', [http_1.Http, Object])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map