const port = process.env.PORT || 8081;
const db = {
  URL: 'mongodb://root:example@mongoDB/',
  localURL: 'mongodb://root:example@localhost',
  // localURL: 'mongodb://root:example@192.168.44.129/',
};
const jwtKey = 'SUPERSECRET';

const dbUrl = process.env.NODE_ENV === 'production' ? db.URL : db.localURL;

export default {
  port,
  dbUrl,
  jwtKey,
};
