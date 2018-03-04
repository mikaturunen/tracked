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
// This shim import is required to have metadata reflection working properly with typeorm
require("reflect-metadata");
const Koa = require("koa");
const load_environment_variable_1 = require("./load-environment-variable");
const typeorm_1 = require("typeorm");
const path = require("path");
const application = new Koa();
application.use((context) => __awaiter(this, void 0, void 0, function* () {
    context.body = 'Hello, World!';
}));
typeorm_1.createConnection({
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
})
    .then(connection => {
    application.listen(load_environment_variable_1.default('PORT'));
})
    .catch(error => console.log(error));
//# sourceMappingURL=index.js.map