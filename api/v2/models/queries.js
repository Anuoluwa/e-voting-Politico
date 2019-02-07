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
('${reqBody.partyName}', '${reqBody.hqAddress}', '${reqBody.logoUrl}', '${reqBody.userId}')
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
export const findPartyById = partyId => (`SELECT * FROM parties WHERE id = ${partyId}`);

/**
 * @function DeleteParty
 * @description This deletes a menu
 * @returns {Object} Object
*/
export const deleteParty = (partyId, userId) => (`
DELETE FROM parties
WHERE id = ${partyId} AND userId = ${userId}`);

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
 * @function editParty
 * @description edit party name
 * @returns {Object} Object
*/
export const editParty = (partyId, partyName) => (`
UPDATE parties 
SET partyName = '${partyName}'
WHERE id = ${partyId}
RETURNING *`);


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

export const findOfficeByType = type => `SELECT * FROM offices WHERE type = '${type}'`;

export const getAllOffice = () => ('SELECT * from offices');

export const findOfficeById = officeId => (` SELECT * FROM offices WHERE id = ${officeId}`);


/**
 * @function createCandidate
 * @description This creates candidates
 * @returns {Object} Object
*/
export const createCandidate = reqBody => (`
INSERT INTO candidates
(office, party, candidate)
VALUES
('${reqBody.office}', '${reqBody.party}', '${reqBody.candidate}')
RETURNING *
`);

export const checkOffice = office => (`SELECT * FROM parties WHERE id = ${office}`);

export const checkParty = party => (
  `SELECT id FROM parties WHERE parties.id = ${party}`
);

export const checkCandidate = id => `SELECT * FROM users WHERE id = '${id}'`;

/**
 * @function vote
 * @description This creates vote
 * @returns {Object} Object
*/
export const createVote = reqBody => (`
INSERT INTO votes
(createdBy, office, candidate)
VALUES
('${reqBody.createdBy}', '${reqBody.office}', '${reqBody.candidate}')
RETURNING *
`);

export const checkContestant = candidate => `SELECT * FROM candidates WHERE id = '${candidate}'`;
/**
 * @function collateFetchResult
 * @description This creates candidates
 * @returns {Object} Object
*/

export const collateResult = office => (`
SELECT office, candidate, COUNT(createdBy) RESULT
FROM  votes
WHERE office = '${office}'
GROUP BY candidate, office
ORDER BY RESULT DESC
`);
