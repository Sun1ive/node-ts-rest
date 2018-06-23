import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as KoaHelmet from 'koa-helmet';
import * as koaBody from 'koa-body';
import * as koaCors from '@koa/cors';
import * as koaLogger from 'koa-logger';
import config from './config';

function createApp(): Koa {
  const app = new Koa();
  const router = new KoaRouter();

  app.use(KoaHelmet());
  app.use(koaCors());
  app.use(koaBody());
  app.use(koaLogger());
  app.use(router.allowedMethods());
  app.use(router.routes());

  router.get('/', ctx => {
    ctx.body = 'OK';
  });
  router.post('/', ctx => {
    ctx.status = 404;
  });
  return app;
}

const app = createApp();

export default app.listen(config.port, () =>
  console.log('Server is listening at port', config.port),
);
