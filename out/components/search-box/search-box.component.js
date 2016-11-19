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
var SearchBoxComponent = (function () {
    function SearchBoxComponent() {
        this.onSearch = new core_1.EventEmitter();
        this.searchInputAnimationState = "hidden";
    }
    SearchBoxComponent.prototype.showSearchInput = function () {
        this.searchInputAnimationState = "shown";
    };
    SearchBoxComponent.prototype.hideSearchInput = function (e) {
        this.searchInputAnimationState = "hidden";
        setTimeout(function () { return (e.target || e.srcElement).value = ""; }, 650);
    };
    SearchBoxComponent.prototype.notifySearch = function (e) {
        if ((e.keyCode || e.which) === 13) {
            this.onSearch.emit((e.target || e.srcElement).value);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchBoxComponent.prototype, "onSearch", void 0);
    SearchBoxComponent = __decorate([
        core_1.Component({
            selector: "search-box",
            templateUrl: "./app/components/search-box/search-box.component.html",
            styleUrls: ["./app/components/search-box/search-box.component.css"],
            animations: [
                core_1.trigger("searchinput", [
                    core_1.state("void", core_1.style({
                        "transform": "translateX(100%)",
                        "opacity": 0
                    })),
                    core_1.state("hidden", core_1.style({
                        "transform": "translateX(100%)",
                        "opacity": 0
                    })),
                    core_1.state("shown", core_1.style({
                        "transform": "translateX(0%)",
                        "opacity": 1
                    })),
                    core_1.transition("hidden <=> shown", core_1.animate("600ms cubic-bezier(0.77, 0, 0.175, 1)"))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
exports.SearchBoxComponent = SearchBoxComponent;
//# sourceMappingURL=search-box.component.js.map