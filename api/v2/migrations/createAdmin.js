import bcrypt from 'bcryptjs';
import db from '../config/connection';

const queries = `
INSERT INTO users
(firstname, lastname, othername, address, phoneNumber, passportUrl, email, password, isAdmin)
 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
 RETURNING *
`;
const password = bcrypt.hashSync('superadmin', 10);
const values = ['superadmin', 'superadmin', 'superadmin', '1 Office App', '07000000000', 'wwww/passporturl.com', 'superadmin@gmail.com', password, 'true'];

db.query(queries, values)
  .then((result => console.log('Admin account inserted successfully')))
  .catch((error) => {
    console.log(error);
  });
