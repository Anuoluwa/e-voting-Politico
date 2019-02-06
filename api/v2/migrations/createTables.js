import db from '../config/connection';

const createUserTable = `
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    othername VARCHAR(255) NOT NULL,
    address  VARCHAR(255) NOT NULL,
    phoneNumber text NOT NULL,
    passportUrl VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT 'false',
    createdAt TIMESTAMP DEFAULT Now()
)`;

const createPartyTable = `
CREATE TABLE IF NOT EXISTS parties(
    id SERIAL PRIMARY KEY,
    partyName VARCHAR(255) NOT NULL,
    hqAddress VARCHAR(255) NOT NULL,
    logoUrl VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT Now(),
    userId INTEGER REFERENCES users(id) ON DELETE CASCADE
)`;


const createOfficeTable = `
CREATE TABLE IF NOT EXISTS offices(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    officeName VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT Now(), 
    userId INTEGER REFERENCES users(id) ON DELETE CASCADE
)`;

const createCandidateTable = `
CREATE TABLE IF NOT EXISTS candidates(
    id SERIAL UNIQUE NOT NULL,
    office INTEGER REFERENCES offices(id) ON DELETE CASCADE,
    party INTEGER REFERENCES parties(id) ON DELETE CASCADE,
    candidate INTEGER REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY (office, candidate),
    createdAt TIMESTAMP DEFAULT Now()
)`;

const createVoteTable = `
CREATE TABLE IF NOT EXISTS votes(
    id SERIAL UNIQUE NOT NULL,
    createdOn TIMESTAMP DEFAULT Now(),
    candidate INTEGER REFERENCES candidates(id) ON DELETE CASCADE,
    createdBy INTEGER REFERENCES users(id) ON DELETE CASCADE,
    office INTEGER REFERENCES offices(id) ON DELETE CASCADE,
    PRIMARY KEY (office, createdBy)
)`;

const createPetitionTable = `
CREATE TABLE IF NOT EXISTS petitions(
    id INTEGER NOT NULL UNIQUE,
    createdOn TIMESTAMP DEFAULT Now(),
    createdBy INTEGER REFERENCES users(id) ON DELETE CASCADE,
    office INTEGER REFERENCES offices(id) ON DELETE CASCADE,
    CONSTRAINT officeVoterPkey PRIMARY KEY (office, createdBy),
    body text NOT NULL
)`;

db.query(createUserTable).then((response) => {
  if (response) {
    console.log('Users table created successfully');
  } else {
    console.log('Error while creating users table');
  }
  db.query(createPartyTable).then((res) => {
    if (res) {
      console.log('Party table created successfully');
    } else {
      console.log('Error while creating party table');
    }
    db.query(createOfficeTable).then((resOffice) => {
      if (resOffice) {
        console.log('Office table created successfully');
      } else {
        console.log('Error while creating office table');
      }
      db.query(createCandidateTable).then((resCandidate) => {
        if (resCandidate) {
          console.log('Candidates table created successfully');
        } else {
          console.log('Error while creating candidates table');
        }
        db.query(createVoteTable).then((resVote) => {
          if (resVote) {
            console.log('Votes table created successfully');
          } else {
            console.log('Error while creating Votess table');
          }
          db.query(createPetitionTable).then((resPetition) => {
            if (resPetition) {
              console.log('Petitions table created successfully');
            } else {
              console.log('Error while creating Petition table');
            }
          }).catch(error => console.log(`${error}`));
        }).catch(error => console.log(`${error}`));
      }).catch(error => console.log(`${error}`));
    }).catch(error => console.log(`${error}`));
  }).catch(error => console.log(`${error}`));
}).catch(error => console.log(`${error}`));
