import * as express from 'express';

const app = express();

app.set('port', process.env.port || 8081);

app.get('/', (req, res) => {
  res.send('Hello World')
});

export default app;