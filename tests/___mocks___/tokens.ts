import * as jwt from 'jsonwebtoken';

export default (data = {}, options = {}) => jwt.sign(data, 'TEST', { expiresIn: '1ms' });
