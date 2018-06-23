import { compareSync } from 'bcryptjs';
import { findUser } from '../../tests/___mocks___/user';
import { IRouterContext } from 'koa-router';

export const login = async (ctx: IRouterContext) => {
  const { login, password }: { login: string; password: string } = ctx.request.body;
  const user = await findUser(login);
  if (!user || !compareSync(password, user.password)) {
    ctx.throw(403);
  }

  ctx.status = 200;
  ctx.body = user;
};
