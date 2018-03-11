// This shim import is required to have metadata reflection working properly with typeorm
import "reflect-metadata";

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Body from 'koa-body';
import * as Serve from 'koa-static';


import loadEnvironmentVariable from './load-environment-variable';
import database from './database';

const application = new Koa();
const router = new Router();

router.get('/', async (context: Router.IRouterContext, next: Router.IMiddleware) => {
  context.body = 'Hello World!';
});

router.post('/api/user', async (context: Router.IRouterContext, next: Router.IMiddleware) => {
  // TODO start using json schema validation for the incoming JSON. Now we just blindly trust it because we are pretty hardcore
  // TODO start using authentication / authorization
  const email = context.request.body.email;
  const user = await database.addUser(email);
  context.body = user;
});

application
  .use(Body())
  .use(router.routes())
  .use(router.allowedMethods())

application
  .listen(loadEnvironmentVariable('PORT'));

console.log(`Application running.`);
