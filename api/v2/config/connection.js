import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let pool;

if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: process.env.DB,
  });
} else if (process.env.NODE_ENV === 'test') {
  pool = new Pool({
    connectionString: process.env.DB_TEST,
  });
}

export default pool;
