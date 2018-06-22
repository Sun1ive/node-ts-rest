import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as KoaHelmet from 'koa-helmet';
import config from './config';

function createApp(): Koa {
  const app = new Koa();
  const router = new KoaRouter();

  router.get('/', ctx => {
    ctx.body = 'OK';
  });
  app.use(KoaHelmet());
  app.use(router.allowedMethods());
  app.use(router.routes());
  return app;
}

const app = createApp();

app.listen(config.port, () => console.log('Server is listening at port', config.port));
