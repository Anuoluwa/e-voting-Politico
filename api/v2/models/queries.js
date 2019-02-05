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

export const findUser = email => `SELECT * FROM users WHERE email = '${email}'`;
export const findUserById = id => `SELECT * FROM users WHERE id = '${id}'`;

export const checkUser = (firstname, email) => `
SELECT * FROM users 
WHERE firstname = '${firstname}' or email = '${email}'
`;

export const findById = id => `SELECT * FROM users WHERE id = ${id}`;


/**
 * @function createParty
 * @description This creates party
 * @returns {Object} Object
*/
export const createParty = reqBody => (`
INSERT INTO parties
(partyName, hqAddress, logoUrl, userId)
VALUES
('${reqBody.partyName}', '${reqBody.hqAddress}', '${reqBody.logoUrl}', ${reqBody.userId})
RETURNING *
`);

export const findParty = partyName => `SELECT * FROM parties WHERE partyName = '${partyName}'`;


/**
 * @method getAllParty
 * @description This returns all party
 * @returns {Object} Object
*/
export const getAllParty = () => ('SELECT * from parties');

/**
 * @method findParty
 * @description This gets a party by id
 * @returns {Object} Object
*/
export const findPartyById = partyId => (` SELECT * FROM parties WHERE id = ${partyId}`);

/**
 * @function DeleteParty
 * @description This deletes a menu
 * @returns {Object} Object
*/
export const deleteParty = (partyId, userId) => (`
DELETE FROM parties
WHERE parties.id = ${partyId} AND parties.userId = ${userId}`);

/**
 * @function checkPartyId
 * @description This gets a party by id
 * @returns {Object} Object
*/
export const checkPartyId = partyId => (
  `SELECT id FROM parties WHERE parties.id = ${partyId}`
);

export const checkPartyName = partyId => (`
SELECT *
FROM parties  
WHERE parties.id = ${partyId}`);


/**
 * @function createOffice
 * @description This creates party
 * @returns {Object} Object
*/
export const createOffice = reqBody => (`
INSERT INTO offices
(type, officeName, userId)
VALUES
('${reqBody.type}', '${reqBody.officeName}', ${reqBody.userId})
RETURNING *
`);

export const findOffice = officeName => `SELECT * FROM offices WHERE officeName = '${officeName}'`;


export const getAllOffice = () => ('SELECT * from offices');
