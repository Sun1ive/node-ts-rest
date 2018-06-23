import * as agent from 'supertest';
import { expect } from 'chai';
import 'mocha';

import server from '../src';

describe('Users module', () => {
  const app = agent(server);

  it('should get 200 at users route', async () => {
    const res = await app.get('/users');
    expect(res.status).to.eq(200);
  });
});
