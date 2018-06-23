import * as agent from 'supertest';
import { expect } from 'chai';
import 'mocha';

import server from '../src';

describe('Testing base routes', () => {
  const app = agent(server);

  it('should fetch index page and get status 200', async () => {
    const res = await app.get('/');
    expect(res.status).to.eq(200);
    expect(res.body).to.be.an('object');
  });

  it('should get 405 if method wasnt described', async () => {
    const res = await app.put('/');
    expect(res.status).to.eq(405);
  });

  it('should get 404 for testing purposes', async () => {
    const res = await app.post('/');
    expect(res.status).to.eq(404);
  });
});
