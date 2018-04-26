import * as express from 'express';
import * as statusControllers from './controllers/status';

const app = express();

app.set('port', process.env.port || 8081);

app.get('/', statusControllers.hi);
app.post('/awesome', statusControllers.awesome);

export default app;