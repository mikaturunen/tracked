"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Attempts to load a specific environment variable from process.env.
 * @param variable Name of the environment variable
 * @param defaultValue What the value should default to if we cannot find it from environment. Optional.
 */
const load = (variable, defaultValue) => {
    if (!process.env[variable]) {
        if (!defaultValue) {
            throw `Variable ${variable} not available.`;
        }
        else {
            return defaultValue;
        }
    }
    return process.env[variable];
};
exports.default = load;
//# sourceMappingURL=load-environment-variable.js.map