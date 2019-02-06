
import db from '../config/connection';

const insertUserTable = `
INSERT INTO  users (firstname, lastname, othername, address, phoneNumber, passportUrl, email, password) 
VALUES
('John', 'Doe', 'Junior', '5 Politico Str', '12345678902', 'www.findmylogo1.com', 'john@politico.com', 'password1'),
('Jane', 'Doe', 'Junior', '5 Politico Str', '12345678902', 'www.findmylogo1.com', 'jane@politico.com', 'password1'),
('Johnbull', 'Doe', 'Junior', '5 Politico Str', '12345678902', 'www.findmylogo1.com', 'johnbull@politico.com', 'password3')`;

const insertPartyTable = `
INSERT INTO  parties (partyName, hqAddress, logoUrl) 
VALUES('New Nigeria Party', '1 Aso Rock Drive', 'wwww.ourlogo.com'),
('New & Fresh Party', '2 Aso Rock Drive', 'wwww.ourlogo1.com'), 
('Fresh People Party', '9 Aso Rock Drive', 'wwww.ourlogo1.com')`;

const insertOfficeTable = `
INSERT INTO  offices (type, officeName) 
VALUES('Federal', 'Presidential'),
('State', 'Gubernatorial'), 
('Local', 'Chairmanship')`;

/*
const insertCandidatesTable = `
INSERT INTO  candidates (id, office, party, candidate, createdAt)
VALUES('1', '1', '1', '3', current_timestamp),
('2', '2', '2', '2', current_timestamp)`;

const insertVotersTable = `
INSERT INTO votes (id, createdOn, createdBy, office, candidate)
VALUES('1', current_timestamp, '1', '2', '1'),
('2', current_timestamp, '2', '2', '1')`;


const insertPetitionsTable = `
INSERT INTO  petitions (id, createdOn, createdBy, office, body)
VALUES('1', current_timestamp, '3', '2', 'Buying of votes')`; */


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
        }
        db.query(insertPetitionsTable).then((resPetition) => {
          if (resPetition) {
            console.log('Petitions table seeded successfully');
          } else {
            console.log('Error while seeding Petitions table');
          } */
      /* db.query(insertVotersTable).then((resVotesTable) => {
        if (resVotesTable) {
          console.log('votes table seeded successfully');
        } else {
          console.log('Error while seeding votes table');
        } */
    }).catch(error => console.log(`${error}`));
  }).catch(error => console.log(`${error}`));
}).catch(error => console.log(`${error}`));
// }).catch(error => console.log(`${error}`));
// }).catch(error => console.log(`${error}`));
// m}).catch(error => console.log(`${error}`));
