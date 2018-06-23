import * as KoaRouter from 'koa-router';
import * as Controllers from '../controllers/auth';

const router = new KoaRouter();

router.post('/login', Controllers.login);

export default router;
