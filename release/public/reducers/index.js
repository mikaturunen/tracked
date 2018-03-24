"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions");
var actions_2 = require("../actions");
/**
 * Reducer that takes in previousState, the action and creates the next state in a controller manner.
 * @param previousState State object describing the previous state that we are going to transition from
 * @param action Action that is performed on the previousState to get a new state
 */
exports.default = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case actions_1.default.SHOW_LOGIN_WINDOW:
            return actions_2.showLogin();
        default:
            // Initial application state. We return this if we have nothing better to do.
            console.log(actions_2.showLogin());
            return actions_2.showLogin();
    }
};
//# sourceMappingURL=index.js.map