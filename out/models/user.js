"use strict";
var User = (function () {
    function User(id, name, username, email, avatar) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.avatar = avatar;
    }
    User.fromJson = function (json) {
        return new User(json.id, json.name, json.username, json.email, json.avatar);
    };
    User.defaultUser = function () {
        return new User(1, "KeepCoder", "keepcoder", "keepcoder@postium.com", "images/keepcoder.jpg");
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map