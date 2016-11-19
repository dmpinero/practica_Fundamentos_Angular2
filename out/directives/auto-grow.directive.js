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
var AutoGrowDirective = (function () {
    function AutoGrowDirective(_elementRef) {
        this._elementRef = _elementRef;
    }
    AutoGrowDirective.prototype.onInput = function (area) {
        this._resize();
    };
    AutoGrowDirective.prototype.ngAfterContentChecked = function () {
        this._resize();
    };
    AutoGrowDirective.prototype._resize = function () {
        this._elementRef.nativeElement.style.overflow = "hidden";
        this._elementRef.nativeElement.style.height = this._elementRef.nativeElement.scrollHeight + "px";
    };
    __decorate([
        core_1.HostListener("input", ["$event.target"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [HTMLTextAreaElement]), 
        __metadata('design:returntype', void 0)
    ], AutoGrowDirective.prototype, "onInput", null);
    AutoGrowDirective = __decorate([
        core_1.Directive({
            selector: "textarea[autogrow]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AutoGrowDirective);
    return AutoGrowDirective;
}());
exports.AutoGrowDirective = AutoGrowDirective;
//# sourceMappingURL=auto-grow.directive.js.map