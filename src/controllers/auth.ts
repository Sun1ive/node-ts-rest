import * as jwt from 'jsonwebtoken';
import * as uuid from 'uuid';
import { compareSync } from 'bcryptjs';
import { IRouterContext } from 'koa-router';

import { findUser } from '../../tests/___mocks___/user';
import config from '../config';

export const login = async (ctx: IRouterContext) => {
  const { login, password }: { login: string; password: string } = ctx.request.body;
  const user = await findUser(login);
  if (!user || !compareSync(password, user.password)) {
    ctx.throw(403);
  } else {
    const refreshToken = uuid();

    ctx.status = 200;
    ctx.body = {
      token: jwt.sign({ id: user.id }, config.jwtKey),
      refreshToken,
    };
  }
};
