import * as agent from 'supertest';
import { expect } from 'chai';
import 'mocha';
import invalidToken from './___mocks___/tokens';

import server from '../src';

describe('Testing auth routes', () => {
  const app = agent(server);
  let validToken: string;

  it('User can successfully login', async () => {
    const res = await app.post('/auth/login').send({
      login: 'user',
      password: 'user',
    });
    validToken = `Bearer ${res.body.token}`;
    expect(res.status).to.eq(200);
    expect(res.body.token).to.be.an('string');
    expect(res.body.refreshToken).to.be.an('string');
  });

  it('User get 403 on login with invalid credentials', async () => {
    const res = await app.post('/auth/login').send({
      login: 'user1',
      password: 'user1',
    });
    expect(res.status).to.eq(403);
  });

  it('User get 200 on login with credentials', async () => {
    const res = await app.get('/users').set('Authorization', validToken);
    expect(res.status).to.eq(200);
    expect(res.body.users).to.be.an('array');
  });

  it('User get 401 on login with invalid credentials', async () => {
    const expiredToken = invalidToken({ id: 1 });
    const invalid = `Bearer ${expiredToken}`;
    const res = await app.get('/users').set('Authorization', invalid);
    expect(res.status).to.eq(401);
  });
});
