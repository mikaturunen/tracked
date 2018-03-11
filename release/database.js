"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path = require("path");
const User_1 = require("./entities/User");
// Closure pattern to invoke it instantly and store the promise for later use
const init = (() => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.createConnection({
        type: "postgres",
        host: "postgres",
        port: 5432,
        username: "root",
        password: "admin",
        database: "test",
        entities: [
            path.join(__dirname, "/entities/*.js")
        ],
        synchronize: true
    });
}))();
/**
 * Saves a new user into the database for later use. Creates a UserEntity and returns a User.
 * @param email Email address for a new user.
 */
const addUser = (email) => __awaiter(this, void 0, void 0, function* () {
    return init.then((connection) => __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = new User_1.default();
            newUser.email = email;
            yield newUser.save();
            return newUser.toJson();
        }
        catch (error) {
            console.log(`Could not save UserEntity for new user: ${email}.`);
            console.log(`Error from saving: ${JSON.stringify(error, null, 2)}.`);
            throw error;
        }
    }));
});
exports.default = {
    addUser
};
//# sourceMappingURL=database.js.map