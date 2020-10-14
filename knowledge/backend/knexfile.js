module.exports = {
  client: 'postgresql',
  connection: {
    host : '0.0.0.0',
    port: 5432,
    database: 'knowledge',
    user:     'postgres',
    password: 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
