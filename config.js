const serverdb=require("./serverdb");
db=serverdb.db;
module.exports = {
  port: 8080,
  db: {
    prod: process.env.DATABASE_URL || db,
    test: db,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
