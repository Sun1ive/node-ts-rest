import * as agent from 'supertest';
import { expect } from 'chai';
import 'mocha';

import server from '../src';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTI5NzQ2ODA5fQ.9Ju9HVyY4vcRA6CUcyt8axvybzt7SlPwS5qMDpcgYRY';

describe('Testing base routes', () => {
  const app = agent(server);

  it('should get 401 with no jwt token sent', async () => {
    const res = await app.get('/');
    expect(res.status).to.eq(401);
  });
  it('should get 200 with jwt token sent', async () => {
    const res = await app.get('/').set('Authorization', token);
    expect(res.status).to.eq(200);
  });

  it('should get 405 if method wasnt described', async () => {
    const res = await app.put('/').set('Authorization', token);
    expect(res.status).to.eq(405);
  });

  it('should get 404 for testing purposes', async () => {
    const res = await app.post('/').set('Authorization', token);
    expect(res.status).to.eq(404);
  });
});
