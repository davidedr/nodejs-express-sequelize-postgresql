module.exports = {
  HOST: "localhost",
  PORT: 5433,
  USER: 'postgres',
  PASSWORD: 'postgres',
  DB: 'test_db',
  dialect: "postgres",
  logging: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};