// This shim import is required to have metadata reflection working properly with typeorm
import "reflect-metadata";

import * as Koa from 'koa';
import loadEnvironmentVariable from './load-environment-variable';
import { createConnection } from 'typeorm';
import * as path from 'path'

const application = new Koa();

application.use(async context => {
  context.body = 'Hello, World!';
});

createConnection({
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
  application.listen(loadEnvironmentVariable('PORT'));
})
.catch(error => console.log(error));
