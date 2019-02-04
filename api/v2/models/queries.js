/**
 * @function User table queries
 * @description This for user authentication methods
 * @returns {Object} Object
*/
export const createUserAccount = reqBody => (`
  INSERT INTO users
  (firstname, lastname, othername, address, phoneNumber, passportUrl, email, password)
   VALUES (
   '${reqBody.firstname}',
   '${reqBody.lastname}',
   '${reqBody.othername}',
   '${reqBody.address}',
   '${reqBody.phoneNumber}',
   '${reqBody.passportUrl}',
   '${reqBody.email}',
   '${reqBody.hashedPassword}')
   RETURNING *
   `);

export const findUser = firstname => `SELECT * FROM users WHERE firstname = '${firstname}'`;
export const findUserById = id => `SELECT * FROM users WHERE id = '${id}'`;

export const checkUser = (firstname, email) => `
SELECT * FROM users 
WHERE firstname = '${firstname}' or email = '${email}'
`;

export const findById = id => `SELECT * FROM users WHERE id = ${id}`;
