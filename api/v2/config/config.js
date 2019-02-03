import dotenv from 'dotenv';

dotenv.config();
const config = {
  production: {
    production: process.env.DB,
  },
  test: {
    test: process.env.DB_TEST,
  },
};
export default config;
