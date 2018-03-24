"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SHOW_LOGIN_WINDOW = 'SHOW_LOGIN_WINDOW';
var ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
exports.default = {
    SHOW_LOGIN_WINDOW: SHOW_LOGIN_WINDOW,
    ATTEMPT_LOGIN: ATTEMPT_LOGIN
};
var creator = function (actionName, payload) {
    return _a = {},
        _a[actionName] = actionName,
        _a.payload = payload,
        _a;
    var _a;
};
exports.showLogin = function () { return creator(SHOW_LOGIN_WINDOW); };
//# sourceMappingURL=index.js.map