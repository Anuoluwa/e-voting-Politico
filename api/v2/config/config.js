import dotenv from 'dotenv';

dotenv.config();
const config = {
  production: {
    production: process.env.DATABASE_URL,
  },
  test: {
    test: process.env.DB_TEST,
  },
  development: {
    test: process.env.DB,
  },
};
export default config;
