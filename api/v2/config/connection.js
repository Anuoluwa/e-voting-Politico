import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let pool;

if (process.env.NODE_ENV === 'development') {
  pool = new Pool({
    connectionString: process.env.DB,
  });
}
if (process.env.NODE_ENV === 'test') {
  pool = new Pool({
    connectionString: process.env.DB_TEST,
  });
}
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

export default pool;
