import { usersCollection, User } from '../../tests/___mocks___/user';
import { IRouterContext } from 'koa-router';

export const fetchUsers = async (ctx: IRouterContext): Promise<User[] | void> => {
  if (usersCollection.length < 1) {
    ctx.throw(404);
    return;
  }
  ctx.status = 200;
  ctx.body = {
    message: 'Success',
    users: usersCollection,
  };
};
