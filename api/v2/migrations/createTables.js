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
    userId SERIAL REFERENCES users(id) ON DELETE CASCADE
)`;


const createOfficeTable = `
CREATE TABLE IF NOT EXISTS offices(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    officeName VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT Now(), 
    userId SERIAL REFERENCES users(id) ON DELETE CASCADE
)`;

const createCandidateTable = `
CREATE TABLE IF NOT EXISTS candidates(
    office SERIAL REFERENCES offices(id) ON DELETE CASCADE,
    party SERIAL REFERENCES parties(id) ON DELETE CASCADE,
    candidate SERIAL REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT candidateId PRIMARY KEY (office, candidate),
    createdAt TIMESTAMP DEFAULT Now()
)`;

const createVoteTable = `
CREATE TABLE IF NOT EXISTS votes(
    createdOn TIMESTAMP DEFAULT Now(),
    createdBy SERIAL REFERENCES users(id) ON DELETE CASCADE,
    office SERIAL REFERENCES offices(id) ON DELETE CASCADE,
    candidate SERIAL REFERENCES candidates(id) ON DELETE CASCADE,
    CONSTRAINT voteId PRIMARY KEY (office, createdBy),
    createdAt TIMESTAMP DEFAULT Now()
)`;

const createPetitionTable = `
CREATE TABLE IF NOT EXISTS petitions(
    createdOn TIMESTAMP DEFAULT Now(),
    createdBy SERIAL REFERENCES users(id) ON DELETE CASCADE,
    office SERIAL REFERENCES offices(id) ON DELETE CASCADE,
    CONSTRAINT officeVoterPkey PRIMARY KEY (office, createdBy)
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
