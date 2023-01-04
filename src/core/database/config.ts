export const config = {
  development: {
    username: '',
    password: '',
    database: 'youdoc_dev',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: '',
    password: '',
    database: 'youdoc_test',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: false,
      },
    },
  },
};
