import { hashSync } from 'bcryptjs';

export interface User {
  id: number;
  login: string;
  password: string;
}

export const findUser = async (login: string): Promise<User | undefined> => {
  return usersCollection.find(user => user.login === login);
};

export const usersCollection: User[] = [
  {
    id: 1,
    login: 'user',
    password: hashSync('user'),
  },
  {
    id: 2,
    login: 'user2',
    password: hashSync('user2'),
  },
];
