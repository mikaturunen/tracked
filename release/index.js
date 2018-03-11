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
const Router = require("koa-router");
const Body = require("koa-body");
const load_environment_variable_1 = require("./load-environment-variable");
const database_1 = require("./database");
const application = new Koa();
const router = new Router();
router.get('/', (context, next) => __awaiter(this, void 0, void 0, function* () {
    context.body = 'Hello World!';
}));
router.post('/api/user', (context, next) => __awaiter(this, void 0, void 0, function* () {
    // TODO start using json schema validation for the incoming JSON. Now we just blindly trust it because we are pretty hardcore
    // TODO start using authentication / authorization
    const email = context.request.body.email;
    const user = yield database_1.default.addUser(email);
    context.body = user;
}));
application
    .use(Body())
    .use(router.routes())
    .use(router.allowedMethods());
application
    .listen(load_environment_variable_1.default('PORT'));
console.log(`Application running.`);
//# sourceMappingURL=index.js.map