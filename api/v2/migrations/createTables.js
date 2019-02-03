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
    password VARCHAR(50) NOT NULL,
    isAdmin BOOL DEFAULT '0',
    createdAt TIMESTAMP DEFAULT Now()
)`;

const createPartyTable = `
CREATE TABLE IF NOT EXISTS parties(
    id SERIAL PRIMARY KEY,
    partyName VARCHAR(255) NOT NULL,
    hqAddress VARCHAR(255) NOT NULL,
    logoUrl VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT Now()
)`;


const createOfficeTable = `
CREATE TABLE IF NOT EXISTS offices(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    officeName VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT Now() 
)`;

const createCandidateTable = `
CREATE TABLE IF NOT EXISTS candidates(
    id SERIAL PRIMARY KEY,
    office SERIAL REFERENCES offices(id) ON DELETE CASCADE,
    party SERIAL REFERENCES parties(id) ON DELETE CASCADE,
    candidate SERIAL REFERENCES users(id) ON DELETE CASCADE ,
    createdAt TIMESTAMP DEFAULT Now()
)`;

const createVoteTable = `
CREATE TABLE IF NOT EXISTS votes(
    id SERIAL PRIMARY KEY,
    createdOn TIMESTAMP DEFAULT Now(),
    createdBy SERIAL REFERENCES users(id) ON DELETE CASCADE,
    office SERIAL REFERENCES offices(id) ON DELETE CASCADE,
    candidate SERIAL REFERENCES candidates(id) ON DELETE CASCADE ,
    createdAt TIMESTAMP DEFAULT Now()
)`;

const createPetitionTable = `
CREATE TABLE IF NOT EXISTS petitions(
    id SERIAL PRIMARY KEY,
    createdOn TIMESTAMP DEFAULT Now(),
    createdBy SERIAL REFERENCES users(id) ON DELETE CASCADE,
    office SERIAL REFERENCES offices(id) ON DELETE CASCADE,
    body text NOT NULL
)`;

const createOfficeVotersTable = `
CREATE TABLE IF NOT EXISTS vote_office (
    officeId   int REFERENCES offices(id) ON UPDATE CASCADE ON DELETE CASCADE,
    voterId    int REFERENCES votes(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT officeVoterPkey PRIMARY KEY (officeId, voterId)
)`;

const createUserOfficesTable = `
CREATE TABLE IF NOT EXISTS user_office(
    officeId   int REFERENCES offices (id) ON UPDATE CASCADE ON DELETE CASCADE,
    userId    int REFERENCES votes(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT userOfficePkey PRIMARY KEY (officeId, userId)
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
            db.query(createOfficeVotersTable).then((resOfficeVoter) => {
              if (resOfficeVoter) {
                console.log('OfficeVoters table created successfully');
              } else {
                console.log('Error while creating OfficeVoters table');
              }
              db.query(createUserOfficesTable).then((resUserOffice) => {
                if (resUserOffice) {
                  console.log('UserOffices table created successfully');
                } else {
                  console.log('Error while creating UserOffices table');
                }
              }).catch(error => console.log(`${error}`));
            }).catch(error => console.log(`${error}`));
          }).catch(error => console.log(`${error}`));
        }).catch(error => console.log(`${error}`));
      }).catch(error => console.log(`${error}`));
    }).catch(error => console.log(`${error}`));
  }).catch(error => console.log(`${error}`));
}).catch(error => console.log(`${error}`));
