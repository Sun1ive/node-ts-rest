import * as KoaRouter from 'koa-router';
import * as Controlles from '../controllers/user';

const router = new KoaRouter();

router.get('/', Controlles.fetchUsers);

export default router;
