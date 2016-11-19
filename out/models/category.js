"use strict";
var Category = (function () {
    function Category(id, name) {
        this.id = id;
        this.name = name;
    }
    Category.fromJson = function (json) {
        return new Category(json.id, json.name);
    };
    Category.fromJsonToList = function (json) {
        return json.reduce(function (categories, category) {
            categories.push(Category.fromJson(category));
            return categories;
        }, []);
    };
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=category.js.map