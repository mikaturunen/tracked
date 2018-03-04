// This shim import is required to have metadata reflection working properly with typeorm
import "reflect-metadata";

import * as Koa from 'koa';
const application = new Koa();

application.use(async context => {
  context.body = 'Hello, World!';
});

application.listen(process.env['PORT']);
