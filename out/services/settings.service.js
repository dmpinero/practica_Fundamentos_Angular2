"use strict";
var core_1 = require("@angular/core");
exports.BackendUri = new core_1.OpaqueToken("BackendUri");
exports.BackendUriProvider = {
    provide: exports.BackendUri,
    useValue: "http://localhost:3004"
};
//# sourceMappingURL=settings.service.js.map