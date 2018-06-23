import { hashSync } from 'bcryptjs';

interface User {
  id: number;
  login: string;
  password: string;
}

export const findUser = (user: User): boolean => {
  const result = usersCollection.some(u => u === user);
  return result;
};

const usersCollection: User[] = [
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
