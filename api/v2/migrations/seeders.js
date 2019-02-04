
import db from '../config/connection';

const insertUserTable = `
INSERT INTO  users (id, firstname, lastname, othername, address, phoneNumber, passportUrl, email, password) 
VALUES
('1', 'John', 'Doe', 'Junior', '5 Politico Str', '12345678902', 'www.findmylogo1.com', 'admin@politico.com', 'password1'),
('2', 'Jane', 'Doe', 'Junior', '5 Politico Str', '12345678902', 'www.findmylogo1.com', 'admin2@politico.com', 'password1'),
('3', 'Johnbull', 'Doe', 'Junior', '5 Politico Str', '12345678902', 'www.findmylogo1.com', 'admin3@politico.com', 'password3')`;

const insertPartyTable = `
INSERT INTO  parties (id, partyName, hqAddress, logoUrl) 
VALUES('1', 'New Nigeria Party', '1 Aso Rock Drive', 'wwww.ourlogo.com'),
('2', 'New & Fresh Party', '2 Aso Rock Drive', 'wwww.ourlogo1.com'), 
('3', 'Fresh People Party', '9 Aso Rock Drive', 'wwww.ourlogo1.com')`;

const insertOfficeTable = `
INSERT INTO  offices (id, type, officeName) 
VALUES('1', 'Federal', 'Presidential'),
('2', 'State', 'Gubernatorial'), 
('3', 'Local', 'Chairmanship')`;


/* const insertCandidatesTable = `
INSERT INTO  candidates (id, office, party, candidate, createdAt)
VALUES('1', '1', '1', '4', current_timestamp),
('2', '2', '2', '5', current_timestamp)`; */
/*
const insertVotersTable = `
INSERT INTO votes (id, createdOn, createdBy, office, candidate)
VALUES('1', current_timestamp, '3', '2', '1'),
('2', current_timestamp, '2', '3', '2')`;
 */

const insertPetitionsTable = `
INSERT INTO  petitions (id, createdOn, createdBy, office, body) 
VALUES('1', current_timestamp, '3', '2', 'Buying of votes')`;

/* const insertUserOfficeTable = `
INSERT INTO  user_office (officeId, userId, userOfficePkey)
VALUES ('1','3','1')`;

const insertOfficeVoterTable = `
INSERT INTO  vote_office (officedId, voterId, officeVotePKey)
VALUES ('2', '1', '1')`; */

db.query(insertUserTable).then((response) => {
  if (response) {
    console.log('Users table seeded successfully');
  } else {
    console.log('Error while seeding users table');
  }
  db.query(insertPartyTable).then((res) => {
    if (res) {
      console.log('Parties table seeded successfully');
    } else {
      console.log('Error while seeding Parties table');
    }
    db.query(insertOfficeTable).then((result) => {
      if (result) {
        console.log('Offices table seeded successfully');
      } else {
        console.log('Error while seeding Offices table');
      }
      /* db.query(insertCandidatesTable).then((resCandidate) => {
        if (resCandidate) {
          console.log('Candidates table seeded successfully');
        } else {
          console.log('Error while seeding Candidates table');
        } */
      db.query(insertPetitionsTable).then((resPetition) => {
        if (resPetition) {
          console.log('Petitions table seeded successfully');
        } else {
          console.log('Error while seeding Petitions table');
        }
        /* db.query(insertUserOfficeTable).then((resUserOffice) => {
            if (resUserOffice) {
              console.log('user_office table seeded successfully');
            } else {
              console.log('Error while seeding user_office table');
            }
            db.query(insertOfficeVoterTable).then((resOfficeVoter) => {
              if (resOfficeVoter) {
                console.log('vote_officetable seeded successfully');
              } else {
                console.log('Error while seeding vote_office table');
              } */
      }).catch(error => console.log(`${error}`));
    }).catch(error => console.log(`${error}`));
  }).catch(error => console.log(`${error}`));
}).catch(error => console.log(`${error}`));
// }).catch(error => console.log(`${error}`));
