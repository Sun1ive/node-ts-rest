import * as agent from 'supertest';
import { expect } from 'chai';
import 'mocha';

import server from '../src';

describe('Testing auth routes', () => {
  const app = agent(server);

  it('User can successfully login', async () => {
    const res = await app.post('/auth/login').send({
      login: 'user',
      password: 'user',
    });
    expect(res.status).to.eq(200);
    // expect(res.body.token).to.be.an('string');
    // expect(res.body.refreshToken).to.be.an('string');
  });
});
